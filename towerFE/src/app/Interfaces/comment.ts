export interface Comment {
    creatorId: String,
    eventId: String,
    body: String,
    creator: {
        id: String,
        name: String,
        picture: String
    } 
}
