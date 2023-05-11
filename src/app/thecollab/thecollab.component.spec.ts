import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThecollabComponent } from './thecollab.component';

describe('ThecollabComponent', () => {
  let component: ThecollabComponent;
  let fixture: ComponentFixture<ThecollabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThecollabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThecollabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
