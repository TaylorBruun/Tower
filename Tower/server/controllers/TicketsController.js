import { Auth0Provider } from '@bcwdev/auth0provider'
import { ticketsService } from '../services/TicketsService'
import BaseController from '../utils/BaseController'

export class TicketsController extends BaseController {
    constructor(){
        super('api/tickets')
        this.router 
        .use(Auth0Provider.getAuthorizedUserInfo)
            .get('', this.getAll)
            .post('', this.create)
            .delete('/:id', this.delete)
    }
    async getAll(req, res, next) {
        try {
            const tickets = await ticketsService.getAll(req.query)
            console.log("returning tickets");
            return res.send(tickets)
        } catch (error) {
            next(error)
        }
    }

    
    async create(req, res, next) {
       try {
         req.body.accountId = req.userInfo.id
         const ticket = await ticketsService.create(req.body)
         return res.send(ticket)
       } catch (error) {
         next(error)
       }
    }
   
    delete(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            req.body.id = req.params.id
            const message = ticketsService.delete(req.body)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }

}