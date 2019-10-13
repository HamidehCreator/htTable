import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from '@src/app/shared/material/table/table.component';
import {HeaderRowDirective} from '@src/app/shared/material/table/directives/header-row.directive';
import {FooterRowDirective} from '@src/app/shared/material/table/directives/footer-row.directive';
import {RowDirective} from '@src/app/shared/material/table/directives/row.directive';
import {NumberModule} from '@src/app/shared/material/number/number.module';

const DECLARATIONS = [
    TableComponent,
    HeaderRowDirective,
    FooterRowDirective,
    RowDirective
];

@NgModule({
    imports: [CommonModule],
    declarations: [...DECLARATIONS],
    exports: [...DECLARATIONS]
})
export class TableModule {}
