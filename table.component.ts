import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef, Input,
    OnInit,
    ViewChild
} from '@angular/core';
import {HeaderRowDirective} from '@src/app/shared/material/table/directives/header-row.directive';
import {FooterRowDirective} from '@src/app/shared/material/table/directives/footer-row.directive';
import {RowDirective} from '@src/app/shared/material/table/directives/row.directive';

@Component({
    selector: 'ht-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
    /// Properties


    /// Decorators
    @ContentChild(HeaderRowDirective, {static: false})
    public headerRow: HeaderRowDirective;

    @ContentChild(FooterRowDirective, {static: false})
    public footerRow: FooterRowDirective;

    @ContentChild(RowDirective, {static: false})
    public row: RowDirective;

    @Input() public dataSource: any [] = [];


    /// Constructor
    constructor() {}


    /// Methods
    public ngOnInit(): void {

    }
}
