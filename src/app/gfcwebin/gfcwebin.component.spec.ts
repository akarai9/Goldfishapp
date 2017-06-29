/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GFCwebinComponent } from './gfcwebin.component';

describe('GFCwebinComponent', () => {
  let component: GFCwebinComponent;
  let fixture: ComponentFixture<GFCwebinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GFCwebinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GFCwebinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
