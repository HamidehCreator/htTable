import {Directive, TemplateRef} from '@angular/core';

@Directive({
    selector: '[htHeaderRow]'
})
export class HeaderRowDirective {
    /// Constructor
    constructor(public templateRef: TemplateRef<HTMLTableRowElement>) {
    }
}
