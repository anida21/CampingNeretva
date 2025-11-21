import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaftingDetailComponent } from './rafting-detail.component';

describe('RaftingDetailComponent', () => {
  let component: RaftingDetailComponent;
  let fixture: ComponentFixture<RaftingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaftingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaftingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
