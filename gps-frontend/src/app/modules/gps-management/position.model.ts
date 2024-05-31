export class Coords {
  latitude: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
  longitude: number;
  accuracy: number;

  constructor(latitude: number, longitude: number, accuracy: number) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.accuracy = accuracy;
  }
}

export class Position {
  coords: Coords;
  timestamp: number;

  constructor(){
    this.coords = new Coords(0,0,0);
    this.timestamp = 0;
  }
}