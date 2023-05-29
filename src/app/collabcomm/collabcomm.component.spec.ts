import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabcommComponent } from './collabcomm.component';

describe('CollabcommComponent', () => {
  let component: CollabcommComponent;
  let fixture: ComponentFixture<CollabcommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollabcommComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollabcommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
