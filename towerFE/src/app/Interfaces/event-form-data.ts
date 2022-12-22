import { eventType } from "../app-state";

export interface EventFormData {
    name: string, 
    description: string, 
    coverImg: string, 
    location: string, 
    capacity: Number, 
    startDate: Date,
    type: eventType,
}
