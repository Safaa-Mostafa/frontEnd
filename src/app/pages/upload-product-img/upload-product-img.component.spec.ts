import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadProductImgComponent } from './upload-product-img.component';

describe('UploadProductImgComponent', () => {
  let component: UploadProductImgComponent;
  let fixture: ComponentFixture<UploadProductImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadProductImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadProductImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
