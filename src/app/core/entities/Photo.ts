export class Photo {
    albumId: string;
    id: string;
    title: string;
    url: string;
    thumbnailUrl: string;

    constructor(photo?) {
        photo = photo || {};
        this.albumId = photo.albumId || '';
        this.id = photo.id || '';
        this.title = photo.title || '';
        this.url = photo.url || '';
        this.thumbnailUrl = photo.thumbnailUrl || '';
    }
}
