import { Address, NomatimModel } from "./nominatim.model";

export class LocationModel{
    osm_id: number;
    lat: string;
    lon: string;
    addresstype: string;
    name: string;
    display_name: string;
    address: Address;
    distance: number;

    constructor(nomatimmodel: NomatimModel, distance: number){
        this.osm_id = nomatimmodel.osm_id;
        this.lat = nomatimmodel.lat;
        this.lon = nomatimmodel.lon;
        this.addresstype = nomatimmodel.addresstype;
        this.name = nomatimmodel.name;
        this.display_name = nomatimmodel.display_name;
        this.address = nomatimmodel.address;
        this.distance = distance * 1000;
    }
}