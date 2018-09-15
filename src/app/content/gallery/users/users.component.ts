import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { UsersAppState, usersSelector } from './store/users.selectors';
import { FetchGalleryUsers } from './store/users.actions';
import { User } from '../../../core/entities/User';
import { Observable } from 'rxjs/index';

@Component({
    selector: 'app-gallery-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

    users$: Observable<User[]>;

    constructor(private usersStore: Store<UsersAppState>) {
    }

    ngOnInit() {
        this.usersStore.dispatch(new FetchGalleryUsers());
        this.users$ = this.usersStore.select(usersSelector);
    }
}
