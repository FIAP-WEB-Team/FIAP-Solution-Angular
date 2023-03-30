export class PassengerData {
    firstName: string;
    lastName: string;
    birthDate: string;
    nationality: string;
    gender: string;

    constructor(firstName: string, lastName: string, birthDate: string, nationality: string, gender: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.birthDate = birthDate
        this.nationality = nationality
        this.gender = gender
    }
}