import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/index';
import { Photo } from '../../../core/entities/Photo';
import { PhotosAppState, photosSelector, photosStateSelector } from './store/photos.selectors';
import { PhotosState } from './store/photos.reducer';
import { Album } from '../../../core/entities/Album';
import { AlbumsAppState, albumsSelector } from '../albums/store/albums.selectors';
import { FetchGalleryAlbumsSuccess } from '../albums/store/albums.actions';

@Component({
    selector: 'app-gallery-photos',
    templateUrl: './photos.component.html',
    styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

    albums: Album[];

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

    constructor(
        private photoStore: Store<PhotosAppState>,
        private albumStore: Store<AlbumsAppState>
    ) {
        this.photos$ = this.photoStore.select(photosSelector);
        this.photosState$ = this.photoStore.select(photosStateSelector);
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

        this.albumStore.select(albumsSelector).subscribe((albums: Album[]) => {
            this.albums = albums;
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

    onDrop(event: { dropIndex: number, el: HTMLElement, source: HTMLElement, type: string, value: any }) {
        // Remove dropped element
        event.el.remove();

        // Cast any type value to Album
        const album: Album = event.value;
        const index = this.albums.findIndex(albumInArray => albumInArray.id === album.id);
        this.albums[index].isSelected = true;
        this.albumStore.dispatch(new FetchGalleryAlbumsSuccess(this.albums));
    }
}
