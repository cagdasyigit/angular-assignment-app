export class Company {
    name: string;
    catchPhrase: string;
    bs: string;

    constructor(company?) {
        company = company || {};
        this.name = company.name || '';
        this.catchPhrase = company.catchPhrase || '';
        this.bs = company.bs || '';
    }
}