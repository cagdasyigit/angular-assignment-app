import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material.module';
import { NgxModule } from './ngx.module';

import { PerfectScrollbarDirective } from '../directives/perfect-scrollbar';
import { TextFilterPipe } from '../pipes/text-filter.pipe';

@NgModule({
    declarations: [
        PerfectScrollbarDirective,
        TextFilterPipe
    ],
    imports: [
        MaterialModule,
        NgxModule,
        FlexLayoutModule,
        CommonModule,
        FormsModule
    ],
    exports: [
        MaterialModule,
        NgxModule,
        FlexLayoutModule,
        CommonModule,
        PerfectScrollbarDirective,
        TextFilterPipe,
        FormsModule
    ]
})
export class SharedModule {}
