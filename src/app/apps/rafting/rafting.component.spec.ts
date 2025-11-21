import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaftingComponent } from './rafting.component';

describe('RaftingComponent', () => {
  let component: RaftingComponent;
  let fixture: ComponentFixture<RaftingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaftingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaftingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
