import { eventType } from "./event";

export interface Ticket {
    eventId: string,
    accountId: string,
    account: {
        email: string,
        name: string,
        picture: string
    }
    event: {
        creatorId: string,
        name: string,
        description: string,
        coverImg: string,
        location: string,
        capacity: Number,
        startDate: Date,
        isCanceled: Boolean,
        type: eventType,
        creator: {
            id: string,
            name: string,
            picture: string
        }
    }
}
