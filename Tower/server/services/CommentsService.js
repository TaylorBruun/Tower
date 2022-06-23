import { dbContext } from "../db/DbContext"


class CommentsService {
    async create(body) {
        let ticket = await dbContext.Tickets.create(body)
        await ticket.populate('creator', 'name picture')
        return ticket
    }

    delete(body) {
        throw new Error('Method not implemented.');
    }

}

export const commentsService = new CommentsService()