import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild('someInput') someInput!: ElementRef;
  prevCursorPosition: number;
  info: string;
  userAgent: string;

  constructor() { }

  onInput(event: Event): void {
    const currentCursorPosition = this.someInput.nativeElement.selectionStart;

    if (currentCursorPosition < this.prevCursorPosition) {
      console.log('El cursor se movió a la izquierda');
    } else if (currentCursorPosition > this.prevCursorPosition) {
      console.log('El cursor se movió a la derecha');
    }

    console.log('current: ', currentCursorPosition, ' previous: ', this.prevCursorPosition, ' absolute: ', this.someInput.nativeElement.value.length);
    this.info = 'current: ' + currentCursorPosition + ' previous: ' + this.prevCursorPosition + ' absolute: ' + this.someInput.nativeElement.value.length;

    this.prevCursorPosition = currentCursorPosition;

    if (currentCursorPosition === this.someInput.nativeElement.value.length) {
      setTimeout(() => {
        console.log('==> are the same <==');
        this.someInput.nativeElement.selectionStart = 0;
        this.someInput.nativeElement.selectionEnd = 0;
        console.log('::: selectionStart: ', this.someInput.nativeElement.selectionStart);
        console.log('::: selectionEnd: ', this.someInput.nativeElement.selectionEnd);
      }, 500);
    }

    this.userAgent = navigator.userAgent;
  }

  ngAfterViewInit() {
    this.someInput.nativeElement.value = 'Whale!';
    console.log('selection start => ', this.someInput.nativeElement.selectionStart);
    this.prevCursorPosition = this.someInput.nativeElement.selectionStart;
  }
}
