import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  apiURL = '/assets/carMockItineraries.json';
  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
