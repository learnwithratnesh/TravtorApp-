import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getCar, getCarItinerariesData } from '../store/store-selector';
import { RouterServiceService } from '../services/router-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  selectedCar: any;
  getCarItineraries: any;
  url: any;
  constructor(private router: Router, private routerEventService: RouterServiceService, private store: Store) {
    this.store.pipe(select(getCar)).subscribe((getCarSearch) => {
      this.selectedCar = getCarSearch;
    });
    this.store.pipe(select(getCarItinerariesData)).subscribe((getCarItineraries) => {
      this.getCarItineraries = getCarItineraries;
    });
  }

  ngOnInit(): void {
    this.routerEventService.subscribeToRouterEvent().subscribe((event) => {
      if (event.url) {
        this.url = event.url;
        if (this.url.indexOf('car') === -1 && (this.selectedCar || this.getCarItineraries)) {
          this.selectedCar = null;
          this.getCarItineraries = null;
        }
      }
    });
  }

}
