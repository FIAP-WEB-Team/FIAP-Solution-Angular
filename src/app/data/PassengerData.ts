export class PassengerData {
    firstName: string;
    lastName: string;
    birthDate: string;
    nationality: string;
    gender: string;
    passengerID!: string

    constructor(firstName: string, lastName: string, birthDate: string, nationality: string, gender: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthDate = birthDate
        this.nationality = nationality
        this.gender = gender
    }
}
export const DUMMY_PASSANGER = new PassengerData("Giba", "Dos Santos", "12/10/1994", "Brasileiro", "Masculino")
