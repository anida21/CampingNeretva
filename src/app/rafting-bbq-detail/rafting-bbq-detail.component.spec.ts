import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaftingBbqDetailComponent } from './rafting-bbq-detail.component';

describe('RaftingBbqDetailComponent', () => {
  let component: RaftingBbqDetailComponent;
  let fixture: ComponentFixture<RaftingBbqDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaftingBbqDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaftingBbqDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
