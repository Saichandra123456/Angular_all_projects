import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalleriesComponent } from './image-galleries.component';

describe('ImageGalleriesComponent', () => {
  let component: ImageGalleriesComponent;
  let fixture: ComponentFixture<ImageGalleriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageGalleriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageGalleriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
