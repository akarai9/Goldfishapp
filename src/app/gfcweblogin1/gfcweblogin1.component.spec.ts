/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GFCweblogin1Component } from './gfcweblogin1.component';

describe('GFCweblogin1Component', () => {
  let component: GFCweblogin1Component;
  let fixture: ComponentFixture<GFCweblogin1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GFCweblogin1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GFCweblogin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
