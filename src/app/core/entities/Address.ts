export class Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: { lat: string, lng: string };

    constructor(address?) {
        address = address || {};
        address.street = address.street || '';
        address.suite = address.suite || '';
        address.city = address.city || '';
        address.zipcode = address.zipcode || '';
        address.geo = address.geo || { lat: '', lng: '' };
    }
}
