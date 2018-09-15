export class Album {
    userId: string;
    id: string;
    title: string;

    constructor(album?) {
        album = album || {};
        this.userId = album.userId || '';
        this.id = album.id || '';
        this.title = album.title || '';
    }
}