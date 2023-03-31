export class FlightData {
    Arrival: string;
    ArrivalDate: string;
    departure: string;
    DepartureDate: string;
    Price: number;
    FlightNumber: number;

    constructor(arrival: string, arrivalDate: string, departure: string, departureDate: string,
        price: number, flightNumber: number) {
        this.Arrival = arrival
        this.ArrivalDate = arrivalDate
        this.departure = departure
        this.DepartureDate = departureDate
        this.Price = price
        this.FlightNumber = flightNumber
    }
}
