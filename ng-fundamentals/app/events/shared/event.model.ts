import { ISession } from "./session.model";

export interface IEvent {
    id: number,
    name: string,
    date: Date,
    time: string,
    price: number,
    imageUrl: string
    // location is nullable, but if location has a value we want to require all other properties that's why they're not marked as nullable
    location?: {
        address: string,
        city: string,
        country: string

    },
    onlineUrl?: string,
    sessions:ISession[]
}