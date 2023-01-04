


export interface TowerEvent  {
    createdAt?: string,
    id: string,
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