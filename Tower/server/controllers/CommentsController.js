import { Auth0Provider } from '@bcwdev/auth0provider'
import { commentsService } from '../services/CommentsService'
import BaseController from '../utils/BaseController'

export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
            // .get('', this.getEventComments)
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.create)
            .delete('/:id', this.delete)
    }
    // async getEventComments(req, res, next) {
    //    try {
    //     eventId = req.
    //      const comments = await commentsService.getEventComments(eventId)
    //    } catch (error) {
    //     next(error)
    //    }
    // }



    async create(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            const comment = await commentsService.create(req.body)
            return res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    delete(req, res, next) {
        try {
            req.body.accountId = req.userInfo.id
            req.body.id = req.params.id
            const message = commentsService.delete(req.body)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }

}