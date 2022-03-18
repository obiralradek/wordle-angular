import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputbtnComponent } from './inputbtn.component';

describe('InputbtnComponent', () => {
  let component: InputbtnComponent;
  let fixture: ComponentFixture<InputbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputbtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
