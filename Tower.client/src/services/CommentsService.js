import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class CommentsService{

async getEventComments(eventId){
    const res = await api.get(`api/events/${eventId}/comments`)
    logger.log('here are the comments', res.data)
    AppState.comments = res.data
}

async createComment(body){
    const res = await api.post('api/comments', body)
    logger.log(res.data)
    AppState.comments.unshift(res.data)
}

async removeComment(commentId){
    const res = await api.delete(`api/comments/${commentId}`)
    logger.log(res.data)
    AppState.comments = AppState.comments.filter(c => c.id != commentId)
}

}



export const commentsService = new CommentsService()