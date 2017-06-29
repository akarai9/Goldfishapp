/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GFCwebloginComponent } from './gfcweblogin.component';

describe('GFCwebloginComponent', () => {
  let component: GFCwebloginComponent;
  let fixture: ComponentFixture<GFCwebloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GFCwebloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GFCwebloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
