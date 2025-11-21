import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaftingBbqSleepDetailComponent } from './rafting-bbq-sleep-detail.component';

describe('RaftingBbqSleepDetailComponent', () => {
  let component: RaftingBbqSleepDetailComponent;
  let fixture: ComponentFixture<RaftingBbqSleepDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaftingBbqSleepDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaftingBbqSleepDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
