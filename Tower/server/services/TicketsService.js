import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"
import { towerEventsService } from "./TowerEventsService"


class TicketsService{
    async getMyTickets(id) {
        
        const tickets = await dbContext.Tickets.find({accountId: id})
        .populate('account', 'name picture')
        .populate('event')
        return tickets
    }
    async getEventTickets(id) {
        const tickets = await dbContext.Tickets.find({eventId: id})
        .populate('account', 'name picture')
        .populate('event')
        return tickets
    }
    
    async getAll(query = {}) {
        let tickets = await dbContext.Tickets.find({query})
        .populate('account', 'name picture')
        .populate('event')
        return tickets
    }
    async getById(id) {
        let ticket = await dbContext.Tickets.findById({id})
        .populate('account', 'name picture')
        .populate('event')
        return ticket
    }
    async create(body) {
       let accountId = body.accountId 
       let eventId = body.eventId
        let alreadyTicketed = await dbContext.Tickets.findOne({eventId, accountId})
        let event = await dbContext.TowerEvents.findById(eventId)
        
        if (alreadyTicketed){
            throw new BadRequest("You already have a ticket for this event")
        }
        if (event.capacity <=0 ){
            throw new BadRequest("That event has no tickets remaining")
        }
        
        let ticket = await dbContext.Tickets.create(body)
        
        await ticket.populate('account', 'name picture')
        await ticket.populate('event')
        await towerEventsService.lowerCapacity(eventId)
        return ticket
    }
  

       
    async delete(body) {
        const ticket = await dbContext.Tickets.findById(body.id)
        if(ticket.accountId.toString() != body.accountId){
            throw new BadRequest("you don't have permission to delete that ticket")
          }
          await towerEventsService.increaseCapacity(ticket.eventId)
          await ticket.remove()
    }
}
export const ticketsService = new TicketsService()