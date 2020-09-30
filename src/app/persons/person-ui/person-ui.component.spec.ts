import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonUIComponent } from './person-ui.component';

describe('PersonUIComponent', () => {
  let component: PersonUIComponent;
  let fixture: ComponentFixture<PersonUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
