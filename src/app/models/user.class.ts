export class User {
  firstName: string;
  lastName: string;
  birthDate: number;
  street: string;
  zipCode: string;
  city: string;
  email: string;
  id: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : ""; // wenn obj exestiert nimm obj.firstName ansonsten ''
    this.lastName = obj ? obj.lastName : "";
    this.birthDate = obj ? obj.birthDate : "";
    this.street = obj ? obj.street : "";
    this.zipCode = obj ? obj.zipCode : "";
    this.city = obj ? obj.city : "";
    this.email = obj ? obj.email : "";
    this.id = obj ? obj.id : "";
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      birthDate: this.birthDate,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      email: this.email,
      id: this.id,
    };
  }
}