export class User {
  firstName: string;
  lastName: string;
  street: string;
  phoneNumber: string;
  city: string;
  email: string;
  id: string;

  constructor(obj?: any) {
    this.firstName = obj ? obj.firstName : ""; // wenn obj exestiert nimm obj.firstName ansonsten ''
    this.lastName = obj ? obj.lastName : "";
    this.street = obj ? obj.street : "";
    this.phoneNumber = obj ? obj.phoneNumber : "";
    this.city = obj ? obj.city : "";
    this.email = obj ? obj.email : "";
    this.id = obj ? obj.id : "";
  }

  public toJSON() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      street: this.street,
      phoneNumber: this.phoneNumber,
      city: this.city,
      email: this.email,
      id: this.id,
    };
  }
}
