
enum eventType {'concert', 'convention', 'sport', 'digital'}

export interface Event  {
    creatorId: String,
    name: String, 
    description: String, 
    coverImg: String, 
    location: String, 
    capacity: Number, 
    startDate: Date,
    isCanceled: Boolean, 
    type: eventType
}