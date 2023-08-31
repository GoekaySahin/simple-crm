export class Costumer {
  name: string;
  contactperson: string;
  street: string;
  zipCode: string;
  city: string;
  email: string;
  id: string;
  notice: string;

  constructor(obj?: any) {
    this.name = obj ? obj.costumer : ""; // wenn obj exestiert nimm obj.firstName ansonsten ''
    this.contactperson = obj ? obj.contactperson : "";
    this.street = obj ? obj.street : "";
    this.zipCode = obj ? obj.zipCode : "";
    this.city = obj ? obj.city : "";
    this.email = obj ? obj.email : "";
    this.id = obj ? obj.id : "";
    this.notice = obj ? obj.notice : "";
  }

  public toJSON() {
    return {
      name: this.name,
      contactperson: this.contactperson,
      street: this.street,
      zipCode: this.zipCode,
      city: this.city,
      email: this.email,
      id: this.id,
      notice: this.notice,
    };
  }
}
