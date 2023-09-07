import { Component, HostListener } from "@angular/core";
import { AppComponent } from "../app.component";
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  title = "ng2-charts-demo";
  lineChart;
  mobile = false;
  under500 = false;

  lineWidth() {
    this.lineChart.width = 300;
    this.lineChart.height = 300;
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    if (window.innerWidth > 1400) {
      this.mobile = false;
      this.under500 = false;
    } else if (window.innerWidth < 1400 && window.innerWidth > 500) {
      this.mobile = true;
      this.under500 = false;
    } else if (window.innerWidth < 500) {
      this.under500 = true;
      this.mobile = false;
    }
  }

  public lineChartData: ChartConfiguration<"line">["data"] = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        data: [65, 59, 72, 76, 65, 75, 80, 70],
        label: "Series A",
        fill: true,
        tension: 0.5,
        borderColor: "black",
        backgroundColor: "rgba(30,210,0,.35)",
      },
      {
        data: [90, 80, 91, 95, 82, 90, 89, 80],
        label: "Series B",
        fill: true,
        tension: 0.5,
        borderColor: "black",
        backgroundColor: "rgba(134,199,234,0.35)",
      },
    ],
  };
  public lineChartOptions: ChartOptions<"line"> = {
    responsive: false,
  };
  public pieChartOptions: ChartOptions<"pie"> = {
    responsive: false,
  };
  public pieChartLabels = [["Download"], ["Store"], ["Mail"]];
  public pieChartDatasets = [
    {
      data: [300, 500, 100],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public lineChartLegend = true;

  constructor(private appComponent: AppComponent) {
    this.setDashboardToShow();
    if (window.innerWidth > 1400) {
      this.mobile = false;
      this.under500 = false;
    } else if (window.innerWidth < 1400 && window.innerWidth > 500) {
      this.mobile = true;
      this.under500 = false;
    } else if (window.innerWidth < 500) {
      this.under500 = true;
      this.mobile = false;
    }
  }
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<"bar">["data"] = {
    labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
      { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
    ],
  };

  public barChartOptions: ChartConfiguration<"bar">["options"] = {
    responsive: false,
  };
  setDashboardToShow() {
    this.appComponent.dashboardPage = true;
    this.appComponent.privacyPage = false;
    this.appComponent.imprintPage = false;
    this.appComponent.costumerPage = false;
    this.appComponent.userPage = false;
  }
}
