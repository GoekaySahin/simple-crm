import { Injectable } from "@angular/core";
import { CostumersComponent } from "./costumers/costumers.component";

@Injectable({
  providedIn: "root",
})
export class CostumerDataService {
  constructor(private costumersComponent: CostumersComponent) {}

  getCostumerCount(): number {
    return this.costumersComponent.allCostumer.length;
  }
}
