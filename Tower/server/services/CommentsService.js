import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"


class CommentsService {
    async getEventComments(id) {
            const comments = await dbContext.Comments.find({eventId: id})
            .populate('creator')
            return comments
    }
    async create(body) {
        let comment = await dbContext.Comments.create(body)
        await comment.populate('creator')
        return comment
    }

    async delete(body) {
        const comment = await dbContext.Comments.findById(body.id)
        if(comment.creatorId.toString() != body.creatorId){
            throw new BadRequest("you don't have permission to delete that comment")
          }
          await comment.remove()
    }

}

export const commentsService = new CommentsService()