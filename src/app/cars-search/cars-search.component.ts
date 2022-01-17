import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../services/data-service.service'
import { CarAddItemAction, CarsAddItemAction } from '../store/action';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css'],
})

export class CarsSearchComponent implements OnInit {
  carForm!: FormGroup;
  pickLocation!: FormControl;
  pickDate!: FormControl;
  dropDate!: FormControl;
  pickTime!: FormControl;
  dropTime!: FormControl;
  age!: FormControl;

  minDate = new Date();

  constructor(private data: DataServiceService, private router: Router, private store: Store) { }

  ngOnInit() {
    this.intializeControl();
    this.createForm();
    this.store.dispatch(new CarAddItemAction(null));
    this.store.dispatch(new CarsAddItemAction(null));
  }

  intializeControl() {
    this.pickLocation = new FormControl('', Validators.required);
    this.pickDate = new FormControl('', [Validators.required]);
    this.dropDate = new FormControl('', [Validators.required]);
    this.pickTime = new FormControl('', Validators.required);
    this.dropTime = new FormControl('', Validators.required);
    this.age = new FormControl('', Validators.required);
  }

  createForm() {
    this.carForm = new FormGroup({
      pickLocation: this.pickLocation,
      pickDate: this.pickDate,
      dropDate: this.dropDate,
      pickTime: this.pickTime,
      dropTime: this.dropTime,
      age: this.age,
    });
  }

  getCarsResults() {
    this.data.fetchData().subscribe((response) => {
      if (response) {
        console.log(response)
        sessionStorage.setItem('selectedCar', JSON.stringify(this.carForm.value));
        this.store.dispatch(new CarAddItemAction(this.carForm.value));
        this.store.dispatch(new CarsAddItemAction(response));
        this.router.navigate(['/car-results']);
      }
    });
  }
}
