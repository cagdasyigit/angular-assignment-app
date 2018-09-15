import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../../core/entities/User';
import { environment } from '../../../environments/environment';
import { Album } from '../../core/entities/Album';

@Injectable()
export class GalleryService {

    constructor(private http: HttpClient) {}

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>(environment.apiRoot + '/users');
    }

    public getAlbums(userId: string): Observable<Album[]> {
        return this.http.get<Album[]>(environment.apiRoot + '/albums?userId=' + userId);
    }
}
