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

  onInputFocus(event: any) {
    console.log('focus...');
    console.log(this.inputValue.length);
    
     // Obtener el elemento HTML subyacente
     const inputElement = this.myInput.nativeElement;
     // Bloquear el cursor al final del campo de entrada al obtener el enfoque
     inputElement.setSelectionRange(this.inputValue.length, this.inputValue.length);
     this.cursorLocked = true;
  }

  onInputChange(event: any) {
    console.log('change...');
    console.log(this.inputValue.length);
    
    if (this.cursorLocked) {
      // Mantener el cursor al final del campo de entrada después de cada cambio
      event.target.setSelectionRange(this.inputValue.length, this.inputValue.length);
    }
  }

  initForm(): void {
    this.formRecharge = this.fb.group({
      amount: ['0.00', Validators.required]
    })
  }


}
