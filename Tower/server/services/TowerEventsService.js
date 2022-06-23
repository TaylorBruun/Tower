import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class TowerEventsService{
    

    async getAll(query = {}) {
        let events = await dbContext.TowerEvents.find(query).populate('creator', 'name picture')
        return events
    }
    async getById(id) {
        
        let event = await dbContext.TowerEvents.findById(id).populate('creator', 'name picture')
        return event
    }
    async create(body) {
        let event = await dbContext.TowerEvents.create(body)
        await  event.populate('creator', 'name picture')
        return event
    }
    async update(id, update) {
        const original = await dbContext.TowerEvents.findById(id).populate('creator', 'name picture')
        if (original.creatorId.toString() != update.creatorId) {
            throw new BadRequest("you don't have permission to edit that project")
        }
        if (original.isCanceled){
            throw new BadRequest("That event is cancelled")
        }
        original.name = update.name ? update.name : original.name
        original.description = update.description ? update.description : original.description
        original.coverImg = update.coverImg ? update.coverImg : original.coverImg
        original.location = update.location ? update.location : original.location
        original.capacity = update.capacity ? update.capacity : original.capacity
        original.startDate = update.startDate ? update.startDate : original.startDate
        original.type = update.type ? update.type : original.type
        original.save()
        return original
    }

    async cancelEvent(id, body) {
        const original = await dbContext.TowerEvents.findById(id).populate('creator', 'name picture')
        if (original.creatorId.toString() != body.creatorId) {
            throw new BadRequest("you don't have permission to edit that project")
        }
        if (original.isCanceled){
            throw new BadRequest("That event is already cancelled")
        }
        original.isCanceled = !original.isCanceled
        original.save()
        return original
    }
    
    async delete(eventId, userId) {
        const event = await dbContext.TowerEvents.findById(eventId)
        if(event.creatorId.toString() != userId){
            throw new BadRequest("you don't have permission to delete that project")
          }
          await event.remove()
    }
    async lowerCapacity(eventId){
        const towerEvent = await this.getById(eventId)
        towerEvent.capacity--
        await towerEvent.save()
        return (towerEvent)
    }
    async increaseCapacity(eventId){
        const towerEvent = await this.getById(eventId)
        towerEvent.capacity++
        await towerEvent.save()
        return (towerEvent)
    }
}
export const towerEventsService = new TowerEventsService()