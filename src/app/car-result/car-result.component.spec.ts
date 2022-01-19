import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarResultComponent } from './car-result.component';
import { DataServiceService } from '../services/data-service.service';

import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Router } from '@angular/router';

import { Store, StoreModule } from '@ngrx/store';
import { appReducer } from '../store/reducer';
import { OrderByPipe } from '../pipes/order-by.pipe';

describe('CarResultComponent', () => {
  let component: CarResultComponent;
  let fixture: ComponentFixture<CarResultComponent>;
  let carsService: DataServiceService;
  let store: Store;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarResultComponent, OrderByPipe],
      imports: [RouterTestingModule,
        MatDialogModule,
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
    fixture = TestBed.createComponent(CarResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("applySort should not apply sorting", waitForAsync(() => {
    const val = {};
    component.applySort(val);
    fixture.detectChanges();
    expect(component.ObjPropName).toBeFalsy();
    expect(component.OrderByType).toBeFalsy();
  }));

  xit("applySort should apply sorting", waitForAsync(() => {
    const obj = {
      val: {
        sortByProp: 'price-dsc'
      }
    };
    component.applySort(obj.val);
    fixture.detectChanges();
  }));
});
