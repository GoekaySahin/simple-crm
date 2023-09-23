import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DashboardComponent } from "./dashboard.component";
import { AppComponent } from "../app.component";
import { MatCardModule } from "@angular/material/card";
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { NgChartsModule } from "ng2-charts";

describe("DashboardComponent", () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      providers: [{ provide: AppComponent, useValue: {} }],
      imports: [MatCardModule, NgChartsModule],
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
