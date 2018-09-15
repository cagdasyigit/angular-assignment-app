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
        user.id = user.id || '';
        user.name = user.name || '';
        user.username = user.username || '';
        user.email = user.email || '';
        user.address = user.address || new Address();
        user.phone = user.phone || '';
        user.website = user.website || '';
        user.company = user.company || new Company();
    }
}
