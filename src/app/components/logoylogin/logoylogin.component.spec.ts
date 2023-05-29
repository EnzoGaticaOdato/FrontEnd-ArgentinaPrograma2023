import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoyloginComponent } from './logoylogin.component';

describe('LogoyloginComponent', () => {
  let component: LogoyloginComponent;
  let fixture: ComponentFixture<LogoyloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoyloginComponent]
    });
    fixture = TestBed.createComponent(LogoyloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
