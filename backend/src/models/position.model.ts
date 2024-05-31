export class Coords {
    latitude: number;
    altitude: number | null;
    altitudeAccuracy: number | null;
    heading: number | null;
    speed: number | null;
    longitude: number;
    accuracy: number;

    constructor(latitude: number, longitude: number, accuracy: number, altitude?: number, altitudeAccuracy?: number, heading?: number, speed?: number) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.accuracy = accuracy;
        this.altitude = altitude || null;
        this.altitudeAccuracy = altitudeAccuracy || null;
        this.heading = heading || null;
        this.speed = speed || null;
    }
}
  
export interface Position {
    coords: Coords;
    timestamp: number;
}