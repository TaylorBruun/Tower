

export interface Ticket {
    id: string
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
        type: string,
        creator: {
            id: string,
            name: string,
            picture: string
        }
    }
}
