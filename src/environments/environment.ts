import { firebaseConfig } from "./firebase-config"; // Passe den Pfad entsprechend an

export const environment = {
  ...firebaseConfig,
  production: true,
};
