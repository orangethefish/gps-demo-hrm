export interface Address {
    road:             string;
    residential:      string;
    suburb:           string;
    city:             string;
    "ISO3166-2-lvl4": string;
    postcode:         string;
    country:          string;
    country_code:     string;
}

export class LocationModel{
    osm_id: number;
    lat: string;
    lon: string;
    addresstype: string;
    name: string;
    display_name: string;
    address: Address;
    distance: number;
}