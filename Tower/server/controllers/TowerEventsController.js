import { Auth0Provider } from '@bcwdev/auth0provider'
import { ticketsService } from '../services/TicketsService'
import { towerEventsService } from '../services/TowerEventsService'
import BaseController from '../utils/BaseController'

export class TowerEventsController extends BaseController {
    constructor(){
        super('api/events')
        this.router 
            .get('', this.getAll)
            .get('/:id', this.getById)
            .get('/:id/tickets', this.getEventTickets)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .put('/:id', this.update)
            .delete('/:id', this.cancelEvent)
    }
    async getAll(req, res, next) {
        try {
            const events = await towerEventsService.getAll(req.query)
            return res.send(events)
        } catch (error) {
            next(error)
        }
    }
    async getById(req, res, next) {
        try {
            const event = await towerEventsService.getById(req.params.id)
            return res.send(event)
        } catch (error) {
            next(error)
        }
    }
    async getEventTickets(req, res, next) {
        try {
            const events = await ticketsService.getEventTickets(req.params.id)
            return res.send(events)
        } catch (error) {
            next(error)
        }
    }
    async create(req, res, next) {
       try {
         req.body.creatorId = req.userInfo.id
         const event = await towerEventsService.create(req.body)
         return res.send(event)
       } catch (error) {
         next(error)
       }
    }
    async update(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const event = await towerEventsService.update(req.params.id, req.body)
            return res.send(event)
        } catch (error) {
            next(error)
        }
    }
    async cancelEvent(req, res, next) {
        try {
            req.body.creatorId = req.userInfo.id
            const event = await towerEventsService.cancelEvent(req.params.id, req.body)
            return res.send(event)
        } catch (error) {
            next(error)
        }
    }
    delete(req, res, next) {
        try {
            const message = towerEventsService.delete(req.params.id, req.userInfo.id)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }

}