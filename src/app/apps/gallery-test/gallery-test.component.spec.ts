import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryTestComponent } from './gallery-test.component';

describe('GalleryTestComponent', () => {
  let component: GalleryTestComponent;
  let fixture: ComponentFixture<GalleryTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryTestComponent ] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
