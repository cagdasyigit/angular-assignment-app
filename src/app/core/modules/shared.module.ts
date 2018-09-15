import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './material.module';
import { NgxModule } from './ngx.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        MaterialModule,
        NgxModule,
        FlexLayoutModule,
        CommonModule
    ],
    exports: [
        MaterialModule,
        NgxModule,
        FlexLayoutModule,
        CommonModule
    ]
})
export class SharedModule {}
