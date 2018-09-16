import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';
import { Photo } from '../../../core/entities/Photo';
import { PhotosAppState, photosSelector, photosStateSelector } from './store/photos.selectors';
import { PhotosState } from './store/photos.reducer';

@Component({
    selector: 'app-gallery-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

    photos$: Observable<Photo[]>;

    photosState$: Observable<PhotosState>;

    constructor(private albumStore: Store<PhotosAppState>) {
        this.photos$ = this.albumStore.select(photosSelector);
        this.photosState$ = this.albumStore.select(photosStateSelector);
    }

    ngOnInit() {
    }

}
