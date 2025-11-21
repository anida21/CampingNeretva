import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaftingOfferComponent } from './rafting-offer.component';

describe('RaftingOfferComponent', () => {
  let component: RaftingOfferComponent;
  let fixture: ComponentFixture<RaftingOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaftingOfferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaftingOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
