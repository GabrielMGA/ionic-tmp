import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appCurrencyFormat]'
})
export class CurrencyFormatDirective {

    constructor(private el: ElementRef) { }

    @HostListener('ionInput')
    async onIonInputAsync(): Promise<void> {
        const value = this.el.nativeElement.value;
        if (value === '0.0') {
            this.el.nativeElement.value = '0.00';
            return;
        }

        if (value.length === 3) {
            const val = '0' + value.replace(/\./g, '');
            this.el.nativeElement.value = val
                .replace(/\D/g, '')
                .replace(/^0*(\d+)(\d{2})$/, '$1.$2')
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            const valLength = this.el.nativeElement.value.length;
            console.log('val length: ', valLength);
            const input: HTMLInputElement = await this.el.nativeElement.getInputElement();
            input.selectionStart = valLength;
            input.selectionEnd = valLength;

            return;
        }

        const formattedValue = value
            .replace(/\D/g, '')
            .replace(/^0*(\d+)(\d{2})$/, '$1.$2')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        this.el.nativeElement.value = formattedValue;
    }
}
