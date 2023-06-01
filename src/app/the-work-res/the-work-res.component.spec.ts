import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheWorkResComponent } from './the-work-res.component';

describe('TheWorkResComponent', () => {
  let component: TheWorkResComponent;
  let fixture: ComponentFixture<TheWorkResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheWorkResComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheWorkResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
