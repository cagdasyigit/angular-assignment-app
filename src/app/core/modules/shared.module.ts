import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { NgxModule } from './ngx.module';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarDirective } from '../directives/perfect-scrollbar';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        PerfectScrollbarDirective
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
        FormsModule
    ]
})
export class SharedModule {}
