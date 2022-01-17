import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from "./app-routing.module";
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { CarsSearchComponent } from "./cars-search/cars-search.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FlightSearchComponent } from "./flight-search/flight-search.component";
import { CruiseSearchComponent } from "./cruise-search/cruise-search.component";
import { HotelSearchComponent } from "./hotel-search/hotel-search.component";
import { CarResultComponent } from "./car-result/car-result.component";

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from '@angular/material/radio';


import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// store router
import { appReducer } from './store/reducer';
import { CommonModalComponent } from './common/common-modal/common-modal.component';


//Pipes
import { OrderByPipe } from './pipes/order-by.pipe';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatRadioModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('app', appReducer),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    }),
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {})
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CarsSearchComponent,
    NavBarComponent,
    FlightSearchComponent,
    CruiseSearchComponent,
    HotelSearchComponent,
    CarResultComponent,
    CommonModalComponent,
    OrderByPipe

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule { }

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
