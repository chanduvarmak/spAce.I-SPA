import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWorkCommComponent } from './the-work-comm.component';

describe('TheWorkCommComponent', () => {
  let component: TheWorkCommComponent;
  let fixture: ComponentFixture<TheWorkCommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheWorkCommComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheWorkCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
