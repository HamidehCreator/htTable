import {Directive, TemplateRef} from '@angular/core';

@Directive({
    selector: '[htFooterRow]'
})
export class FooterRowDirective {

    constructor(public templateRef: TemplateRef<HTMLTableRowElement>) {}
}
