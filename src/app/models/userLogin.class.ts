import { Meta } from "@angular/platform-browser";
import { User } from "./user.class";

export class UserLogin extends User {
  emailVerified: boolean;
  isAnonymous: boolean;
  metadata: Meta;
}
