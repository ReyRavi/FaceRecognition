import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddemsPage } from './addems.page';

describe('AddemsPage', () => {
  let component: AddemsPage;
  let fixture: ComponentFixture<AddemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
