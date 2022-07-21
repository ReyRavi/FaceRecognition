import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavemanagementPage } from './leavemanagement.page';

describe('LeavemanagementPage', () => {
  let component: LeavemanagementPage;
  let fixture: ComponentFixture<LeavemanagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeavemanagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavemanagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
