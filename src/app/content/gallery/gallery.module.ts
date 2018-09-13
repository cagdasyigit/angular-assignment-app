import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';

// import {galleryReducers} from './store/gallery.reducers';
import {EffectsModule} from '@ngrx/effects';
import {RouterModule, Routes} from '@angular/router';
import {GalleryComponent} from './gallery.component';

const routes: Routes = [{
    path: 'gallery',
    component: GalleryComponent
}];

@NgModule({
    declarations: [
        GalleryComponent
    ],
    imports: [
        RouterModule.forChild(routes)
        // StoreModule.forRoot(galleryReducers),
        // EffectsModule.forRoot([])
    ],
    exports: [
        GalleryComponent
    ]
})
export class GalleryModule {}
