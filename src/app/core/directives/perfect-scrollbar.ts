import { AfterViewInit, Directive, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';

@Directive({
    selector: '[appScrollbar]'
})
export class PerfectScrollbarDirective implements AfterViewInit, OnDestroy, OnChanges {

    ps;

    constructor(private element: ElementRef) {}

    ngAfterViewInit() {
        this.ps = new PerfectScrollbar(this.element.nativeElement, {
            wheelPropagation: true
        });
    }

    ngOnDestroy() {
        this.ps.destroy();
    }

    ngOnChanges() {
        if (this.ps != null) {
            this.ps.update();
        }
    }
}
