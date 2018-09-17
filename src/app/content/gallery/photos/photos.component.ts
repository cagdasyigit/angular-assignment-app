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

    unfilteredPhotos: Photo[];

    filteredPhotos: Photo[];

    pageSize: number;

    currentPage: number;

    selectedSort = 'title';

    sortSelection = [
        { value: 'title', viewValue: 'A-Z' },
        { value: 'eltit', viewValue: 'Z-A' }
    ];

    constructor(private albumStore: Store<PhotosAppState>) {
        this.photos$ = this.albumStore.select(photosSelector);
        this.photosState$ = this.albumStore.select(photosStateSelector);
        this.pageSize = 10;
        this.currentPage = 0;
    }

    ngOnInit() {
        this.photos$.subscribe((photos: Photo[]) => {
            this.unfilteredPhotos = photos.sort((prev: Photo, next: Photo) => {
                switch (this.selectedSort) {
                    case 'title':
                        return prev.title > next.title ? 1 : -1;
    
                    case 'eltit':
                        return next.title > prev.title ? 1 : -1;
    
                    default:
                        return 0;
                }
            });
            this.setFilteredPhotos();
        });
    }

    setFilteredPhotos() {
        const startIndex = (this.currentPage * this.pageSize);
        const endIndex = (this.currentPage * this.pageSize) + this.pageSize;
        this.filteredPhotos = [...this.unfilteredPhotos].slice(startIndex, endIndex);
    }

    setPage(pageNumber: {previousPageIndex, pageIndex, pageSize, length}) {
        this.currentPage = pageNumber.pageIndex;
        this.pageSize = pageNumber.pageSize;
        this.setFilteredPhotos();
    }

    onSort(value: string) {
        this.selectedSort = value;
        this.unfilteredPhotos = this.unfilteredPhotos.sort((prev: Photo, next: Photo) => {
            switch (value) {
                case 'title':
                    return prev.title > next.title ? 1 : -1;

                case 'eltit':
                    return next.title > prev.title ? 1 : -1;

                default:
                    return 0;
            }
        });

        // Reset Filtered Photos
        this.setFilteredPhotos();
    }
}
