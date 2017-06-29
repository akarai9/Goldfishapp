/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GFCwebmoreaccountComponent } from './gfcwebmoreaccount.component';

describe('GFCwebmoreaccountComponent', () => {
  let component: GFCwebmoreaccountComponent;
  let fixture: ComponentFixture<GFCwebmoreaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GFCwebmoreaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GFCwebmoreaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
