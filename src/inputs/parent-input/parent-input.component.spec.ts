import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FaInputComponent } from '../fa-input/fa-input.component';
import { InputRefDirective } from '../shared/directives/input-ref.directive';

import { ParentInputComponent } from './parent-input.component';

fdescribe('ParentInputComponent', () => {
  let component: ParentInputComponent,
   fixture: ComponentFixture<ParentInputComponent>,
   el: DebugElement,
   emailField: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentInputComponent, FaInputComponent, InputRefDirective]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentInputComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    emailField = el.query( By.css('#email-field') );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a font awesome email input', () => {
    expect(emailField).toBeTruthy();
  });

  it('should create an icon for font awesome email input', () => {
    let icon = emailField.query( By.css('i.icon.fa.fa-envelope') )
    expect(icon).toBeTruthy();
  });

  it('should have projected the correct test input inisde the email field', () => {
    let input = emailField.query( By.css('input.test-class') )
    expect(input).toBeTruthy();
  });

});

