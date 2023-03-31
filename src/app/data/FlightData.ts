export class FlightData {
    arrival: string;
    arrivalDate: string;
    departure: string;
    departureDate: string;
    price: number;
    flightNumber: number;

    constructor(arrival: string, arrivalDate: string, departure: string, departureDate: string,
        price: number, flightNumber: number) {
        this.arrival = arrival
        this.arrivalDate = arrivalDate
        this.departure = departure
        this.departureDate = departureDate
        this.price = price
        this.flightNumber = flightNumber
    }
}