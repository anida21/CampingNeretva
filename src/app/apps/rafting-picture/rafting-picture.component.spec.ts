import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaftingPictureComponent } from './rafting-picture.component';

describe('RaftingPictureComponent', () => {
  let component: RaftingPictureComponent;
  let fixture: ComponentFixture<RaftingPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaftingPictureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaftingPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
