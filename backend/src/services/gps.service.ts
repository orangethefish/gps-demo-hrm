import { NomatimModel } from './../models/nominatim.model';
import { Position } from "../models/position.model";
import { LocationModel } from "../models/location.model";
import { environment } from "../environment/environment";
import axios from 'axios';

const EARTH_RADIUS = 6371;

function calculateDistance(position: Position){
    
    let dLat = deg2rad(position.coords.latitude - environment.companyPosition.latitude);
    let dLon = deg2rad(position.coords.longitude - environment.companyPosition.longitude);

    let lat1 = deg2rad(environment.companyPosition.latitude);
    let lat2 = deg2rad(position.coords.latitude);

    let a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    let distance = EARTH_RADIUS * c;

    return distance;
}

function deg2rad(deg: number){
    return deg * (Math.PI/180);
}

async function getRoadName(position: Position): Promise<NomatimModel>{
    const geocodingUrl = `${environment.nominatimUrl}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;   
    const response = await axios.get(geocodingUrl);
    return response.data;
}

export async function getGpsDistance(position: Position): Promise<LocationModel> {
    if(!position || !position.coords || !position.coords.latitude || !position.coords.longitude){
        throw new Error('Invalid position');
    }
    const nomatimModel = await getRoadName(position);
    return new LocationModel(nomatimModel, calculateDistance(position));
}