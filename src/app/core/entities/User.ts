import { Address } from './Address';
import { Company } from './Company';

export class User {
    id: string;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;

    constructor(user?) {
        user = user || {};
        this.id = user.id || '';
        this.name = user.name || '';
        this.username = user.username || '';
        this.email = user.email || '';
        this.address = user.address || new Address();
        this.phone = user.phone || '';
        this.website = user.website || '';
        this.company = user.company || new Company();
    }
}
