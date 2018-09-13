import {NgModule} from '@angular/core';
import {NgxDnDModule} from '@swimlane/ngx-dnd';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';

@NgModule({
    imports: [
        NgxDnDModule,
        NgxDatatableModule
    ],
    exports: [
        NgxDnDModule,
        NgxDatatableModule
    ]
})
export class NgxModule {}
