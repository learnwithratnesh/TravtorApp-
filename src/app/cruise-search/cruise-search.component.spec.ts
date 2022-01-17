import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CruiseSearchComponent } from './cruise-search.component';

describe('CruiseSearchComponent', () => {
  let component: CruiseSearchComponent;
  let fixture: ComponentFixture<CruiseSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CruiseSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CruiseSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
