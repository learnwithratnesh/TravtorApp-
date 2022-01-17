import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CarsSearchComponent } from "./cars-search/cars-search.component";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { HotelSearchComponent } from "./hotel-search/hotel-search.component";
import { CruiseSearchComponent } from "./cruise-search/cruise-search.component";
import { CarResultComponent } from "./car-result/car-result.component";

const routes: Routes = [
  { path: "", redirectTo: "/cars-search", pathMatch: "full" },
  { path: "cars-search", component: CarsSearchComponent },
  { path: "flight-search", component: FlightSearchComponent },
  { path: "hotel-search", component: HotelSearchComponent },
  { path: "cruise-search", component: CruiseSearchComponent },
  { path: "car-results", component: CarResultComponent },
  { path: "**", redirectTo: "/cars-search", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
