import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getCar, getCarItinerariesData } from '../store/store-selector';
import { Router } from '@angular/router';
import { DataServiceService } from '../services/data-service.service';
import { propertyMap, orderMap, getKeyValue } from '../models/constants';

import { MatDialog } from "@angular/material/dialog";

import { CommonModalComponent } from '../common/common-modal/common-modal.component'

@Component({
  selector: 'app-car-result',
  templateUrl: './car-result.component.html',
  styleUrls: ['./car-result.component.css']
})
export class CarResultComponent {

  selectedCar: any = null;
  ObjPropName: string = '';
  OrderByType: boolean = false;
  getCarItineraries: any;
  totalDays: number = 23;

  constructor(private store: Store, private router: Router, private carsService: DataServiceService, private dialog: MatDialog) {
    this.store.pipe(select(getCar)).subscribe((getCarSearch) => {
      this.selectedCar = getCarSearch;
    });
    this.store.pipe(select(getCarItinerariesData)).subscribe((getCarItineraries) => {
      this.getCarItineraries = getCarItineraries;
    });
  }

  openSort() {
    let currentDialog = this.dialog.open(CommonModalComponent);
    currentDialog.afterClosed().subscribe((value) => {
      this.applySort(value);
    })
  }

  applySort(val: any): void {

    console.log('-----------------,', JSON.stringify(val));
    if (val && val.sortByProp) {
      let propArr = val.sortByProp.split('-');
      this.ObjPropName = getKeyValue(propertyMap, propArr[0]);
      this.OrderByType = getKeyValue(orderMap, propArr[1]);
    }
  }

}
