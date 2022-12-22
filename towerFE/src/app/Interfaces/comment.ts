export interface Comment {
    creatorId: string,
    eventId: string,
    body: string,
    creator: {
        id: string,
        name: string,
        picture: string
    } 
}
