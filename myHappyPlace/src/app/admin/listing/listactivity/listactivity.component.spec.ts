import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListactivityComponent } from './listactivity.component';

describe('ListactivityComponent', () => {
  let component: ListactivityComponent;
  let fixture: ComponentFixture<ListactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListactivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
