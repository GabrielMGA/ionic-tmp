import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appCurrencyFormat]'
})
export class CurrencyFormatDirective {

    constructor(private elementRef: ElementRef) { }


    @HostListener('ionInput')
    onInput() {
        const value = this.elementRef.nativeElement.value;


        if (value === '0.0') {
            this.elementRef.nativeElement.value = '0.00';
            return;
        }

        if (value.length === 3) {

            let val = '0' + value.replace(/\./g, '');
            this.elementRef.nativeElement.value = val
                .replace(/\D/g, '')
                .replace(/^0*(\d+)(\d{2})$/, '$1.$2')
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return;
        }
        let formattedValue = value
            .replace(/\D/g, '')
            .replace(/^0*(\d+)(\d{2})$/, '$1.$2')
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

        this.elementRef.nativeElement.value = formattedValue;
    }

}
