export class Album {
    userId: string;
    id: string;
    title: string;
    isSelected: boolean;

    constructor(album?) {
        album = album || {};
        this.userId = album.userId || '';
        this.id = album.id || '';
        this.title = album.title || '';
        this.isSelected = album.isSelected || false;
    }
}
