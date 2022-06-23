import { Auth0Provider } from '@bcwdev/auth0provider'
import { Logger } from 'sass'
import { accountService } from '../services/AccountService'
import { ticketsService } from '../services/TicketsService'
import BaseController from '../utils/BaseController'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/tickets', this.getMyTickets)
  }
  
  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
  async getMyTickets(req, res, next) {
   try {
    req.body.accountId = req.userInfo.id
    const tickets = await ticketsService.getMyTickets(req.body.accountId)
    res.send(tickets)
   } catch (error) {
    next(error)
   }
  }
}
