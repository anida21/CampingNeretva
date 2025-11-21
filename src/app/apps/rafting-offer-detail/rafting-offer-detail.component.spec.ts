import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaftingOfferDetailComponent } from './rafting-offer-detail.component';

describe('RaftingOfferDetailComponent', () => {
  let component: RaftingOfferDetailComponent;
  let fixture: ComponentFixture<RaftingOfferDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaftingOfferDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaftingOfferDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
