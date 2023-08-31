import { Injectable } from "@angular/core";
import { CostumerDataService } from "./costumer-data.service";

@Injectable({
  providedIn: "root",
})
export class ServicesService {
  constructor(private costumerDataService: CostumerDataService) {}
  allCostumer;
  topValue = 200;

  increaseTop() {
    const costumerLen = this.costumerDataService.getCostumerCount();
    const unit = 60;
    let value = costumerLen * 60 + 200;
    this.topValue = value; //  Oder jeder andere gewünschte Inkrementwert
  }
}
