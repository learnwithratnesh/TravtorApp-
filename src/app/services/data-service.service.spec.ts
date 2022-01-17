import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DataServiceService } from './data-service.service';

describe('DataServiceService', () => {
  let service: DataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataServiceService]
    });
    service = TestBed.inject(DataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch data correctly', fakeAsync(
    inject([DataServiceService, HttpTestingController], (carsService: DataServiceService, backend: HttpTestingController) => {
      const responseObject = {
        currency: 'USD',
        CarItineraries: []
      };
      let response = null;
      carsService.fetchData().subscribe(
        (receivedResponse: any) => {
          response = receivedResponse;
        },
        (error: any) => { }
      );
      const requestWrapper = backend.expectOne({ url: '/assets/carMockItineraries.json' });
      requestWrapper.flush(responseObject);
      tick();
      expect(requestWrapper.request.method).toEqual('GET');
    })
  ));
});
