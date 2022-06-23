import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class EventsService{
    async getEvents(query = ''){
        const res = await api.get('api/events' + query)
        logger.log(res.data)
        AppState.events = res.data
    }
async createEvent(body){
    const res = await api.post('api/events', body)
    logger.log (res.data)
    AppState.events.unshift(res.data)
}

}

export const eventsService = new EventsService()