export class Company {
    name: string;
    catchPhrase: string;
    bs: string;

    constructor(company?) {
        company = company || {};
        company.name = company.name || '';
        company.catchPhrase = company.catchPhrase || '';
        company.bs = company.bs || '';
    }
}