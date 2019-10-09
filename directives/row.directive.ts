import {Directive, ElementRef, TemplateRef} from '@angular/core';

@Directive({
    selector: '[htRow]'
})
export class RowDirective {
    constructor(public templateRef: TemplateRef<HTMLTableRowElement>) {}
}
