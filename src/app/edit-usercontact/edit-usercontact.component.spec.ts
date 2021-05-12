import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsercontactComponent } from './edit-usercontact.component';

describe('EditUsercontactComponent', () => {
  let component: EditUsercontactComponent;
  let fixture: ComponentFixture<EditUsercontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUsercontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUsercontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
