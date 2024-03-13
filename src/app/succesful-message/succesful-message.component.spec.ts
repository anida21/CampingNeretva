import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccesfulMessageComponent } from './succesful-message.component';

describe('SuccesfulMessageComponent', () => {
  let component: SuccesfulMessageComponent;
  let fixture: ComponentFixture<SuccesfulMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccesfulMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccesfulMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
