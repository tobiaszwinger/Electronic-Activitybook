import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtnavbarComponent } from './addtnavbar.component';

describe('AddtnavbarComponent', () => {
  let component: AddtnavbarComponent;
  let fixture: ComponentFixture<AddtnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
