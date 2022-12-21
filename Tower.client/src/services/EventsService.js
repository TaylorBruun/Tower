import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class EventsService {
    async getEvents(query = '') {
        const res = await api.get('api/events' + query)
        logger.log(res.data)
        AppState.events = res.data
    }
    async createEvent(body) {
        const res = await api.post('api/events', body)
        logger.log(res.data)
        AppState.events.unshift(res.data)
        return res.data
    }
    async cancelEvent(eventId) {
        const res = await api.delete(`api/events/${eventId}`)
        logger.log("deleting", res.data)
        let found = AppState.events.find(e => e.id == eventId)
        found.isCanceled = !found.isCanceled
        return res.data
    }

    getEventsForMyTickets() {
        let eventIds = []
        AppState.myTickets.forEach(t => eventIds.push(t.eventId))
        AppState.eventsAttending = AppState.events.filter(e => eventIds.includes(e.id))
    }

}

export const eventsService = new EventsService()