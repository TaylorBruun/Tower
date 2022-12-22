
export enum eventType {'concert', 'convention', 'sport', 'digital'}

export interface Event  {
    id: string,
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