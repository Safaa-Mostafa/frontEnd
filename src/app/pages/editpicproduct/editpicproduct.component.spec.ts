import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpicproductComponent } from './editpicproduct.component';

describe('EditpicproductComponent', () => {
  let component: EditpicproductComponent;
  let fixture: ComponentFixture<EditpicproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpicproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpicproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
