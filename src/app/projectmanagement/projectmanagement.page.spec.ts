import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagementPage } from './projectmanagement.page';

describe('ProjectmanagementPage', () => {
  let component: ProjectmanagementPage;
  let fixture: ComponentFixture<ProjectmanagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectmanagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmanagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
