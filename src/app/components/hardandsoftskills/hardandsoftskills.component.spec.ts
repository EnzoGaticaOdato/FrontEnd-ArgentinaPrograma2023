import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardandsoftskillsComponent } from './hardandsoftskills.component';

describe('HardandsoftskillsComponent', () => {
  let component: HardandsoftskillsComponent;
  let fixture: ComponentFixture<HardandsoftskillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HardandsoftskillsComponent]
    });
    fixture = TestBed.createComponent(HardandsoftskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
