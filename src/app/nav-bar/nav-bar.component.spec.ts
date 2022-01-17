import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';

import { RouterServiceService } from '../services/router-service.service';
import { of } from 'rxjs';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let routerEventService: RouterServiceService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader
          }
        })
      ],
      declarations: [NavBarComponent],
      providers: [RouterServiceService]
    })
      .compileComponents();
    routerEventService = TestBed.inject(RouterServiceService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('ngOnInit should check the route events', () => {
    spyOn(routerEventService, 'subscribeToRouterEvent').and.returnValue(of({ url: 'some url' }));
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.url).toEqual('some url');
  });
});
