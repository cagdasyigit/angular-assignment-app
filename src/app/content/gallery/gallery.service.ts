import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../core/entities/User';
import { environment } from '../../../environments/environment';
import { Album } from '../../core/entities/Album';
import { Photo } from '../../core/entities/Photo';

@Injectable()
export class GalleryService {

    constructor(private http: HttpClient) {}

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(environment.apiRoot + '/users');
    }

    public getAlbums(userId: string): Observable<Album[]> {
        return this.http.get<Album[]>(environment.apiRoot + '/albums?userId=' + userId);
    }

    public getPhotos(albumsQueryString: string): Observable<Photo[]> {
        return this.http.get<Photo[]>(environment.apiRoot + '/photos' + albumsQueryString);
    }

    public saveAlbum(album: Album): Observable<Album> {
        return this.http.post<Album>(environment.apiRoot + '/albums', album);
    }
}
