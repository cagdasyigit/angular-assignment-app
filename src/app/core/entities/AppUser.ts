export class AppUser {
    firstName: string;
    lastName: string;
    email: string;
    roles: any[];

    constructor(appUser?) {
        appUser = appUser || {};
        this.firstName = appUser.firstName || '';
        this.lastName = appUser.lastName || '';
        this.email = appUser.email || '';
        this.roles = appUser.roles || [];
    }
}
