export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string, lng: string };

    constructor(address?) {
        address = address || {};
        this.street = address.street || '';
        this.suite = address.suite || '';
        this.city = address.city || '';
        this.zipcode = address.zipcode || '';
        this.geo = address.geo || { lat: '', lng: '' };
    }
}
