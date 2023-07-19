import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  inputValue: string = '';
  formRecharge!: FormGroup;
  cursorLocked: boolean = false;

  @ViewChild('myInput') myInput: ElementRef;

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm(): void {
    this.formRecharge = this.fb.group({
      amount: ['0.00', Validators.required]
    })
  }
}
