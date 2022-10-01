import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserCateComponent } from './single-user-cate.component';

describe('SingleUserCateComponent', () => {
  let component: SingleUserCateComponent;
  let fixture: ComponentFixture<SingleUserCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUserCateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUserCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
