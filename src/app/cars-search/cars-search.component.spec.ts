import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarsSearchComponent } from './cars-search.component';
import { DataServiceService } from '../services/data-service.service';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Store, StoreModule } from '@ngrx/store';
import { appReducer } from '../store/reducer';
import { of } from 'rxjs/internal/observable/of';


const data = {
  currency: 'USD',
  CarItineraries: [
    {
      id: '8ITI1R2FVI61116-2304.1',
      unlimitedMileage: true,
      cancellationDetails: {
        isCancellationFree: true,
        freeCancellationEndDate: '2020-06-29T10:29:59',
      },
      fare: {
        totalAmount: 604,
        perDay: 36,
      },
      vehicle: {
        name: 'Group A - Kia Rio or similar',
        type: 'Economy',
        image:
          'https://www.avis.com/content/dam/cars/l/2021/toyota/2021-toyota-camry-se-sedan-black.png',
        specifications: {
          baggageCapacity: '1',
          passengerCapacity: '5',
        },
      },
    },
    {
      id: '8ITI1R2FVI61116-2304.2',
      unlimitedMileage: true,
      cancellationDetails: {
        isCancellationFree: true,
        freeCancellationEndDate: '2020-06-29T10:29:59',
      },
      fare: {
        totalAmount: 636,
        perDay: 37,
      },
      vehicle: {
        name: 'Group B - Ford Focus or similar',
        type: 'Compact',
        image:
          'http://www.avis.com/car-rental/images/global/en/rentersguide/vehicle_guide/2016-ford-focus-se-sedan-black.png',
        specifications: {
          baggageCapacity: '4',
          passengerCapacity: '5',
        },
      },
    },

  ],
  paging: {
    pageNo: 1,
    pageSize: 10,
  },
};

describe('CarsSearchComponent', () => {
  let component: CarsSearchComponent;
  let fixture: ComponentFixture<CarsSearchComponent>;
  let carsService: DataServiceService;
  let store: Store;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarsSearchComponent],
      imports: [RouterTestingModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature('app', appReducer),
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })],
      providers: [DataServiceService]
    })
      .compileComponents();
    carsService = TestBed.inject(DataServiceService);
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("getCarsResults should call carsService and return list of car teneraries and then redirect", waitForAsync(() => {
    spyOn(carsService, 'fetchData').and.returnValue(of(data));
    spyOn(store, 'dispatch');
    spyOn(router, 'navigate');
    component.getCarsResults();
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledOnceWith(['/car-results']);
  }));
});
