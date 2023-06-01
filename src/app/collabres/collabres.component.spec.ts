import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabresComponent } from './collabres.component';

describe('CollabresComponent', () => {
  let component: CollabresComponent;
  let fixture: ComponentFixture<CollabresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollabresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollabresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
