export class TicketData {
    passengerID: string;
    flightID: number;

    constructor(passengerID: string, flightID: number) {
        this.passengerID = passengerID
        this.flightID = flightID
    }
}