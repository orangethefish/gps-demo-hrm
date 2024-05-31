import { LocationModel } from './../modules/gps-management/location.model';
import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Position } from '../modules/gps-management/position.model';
import { GpsService } from '../modules/gps-management/gps-management.service';
import { environment } from 'src/environments/environment';
import * as L from 'leaflet';
import { Icon } from 'leaflet';


@Component({
  selector: 'app-gps-management',
  templateUrl: './gps-management.component.html',
  styleUrls: ['./gps-management.component.css'],
})
export class GpsManagementComponent implements OnInit, AfterViewInit {
  public position : Position;

  public location : LocationModel;
  private map
  

  private initMap(): void {
    this.map = L.map('map').setView([this.position.coords.latitude, this.position.coords.longitude], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    L.marker([this.position.coords.latitude, this.position.coords.longitude]).addTo(this.map)
      .bindPopup('You are here.')
      .openPopup();
  }

  constructor(private gpsService : GpsService) {
  }

  ngOnInit(): void {
    this.getLocation();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position : Position) => {
        if (position) {
          this.position = new Position();
          this.position.coords.accuracy = position.coords.accuracy;
          this.position.coords.latitude = position.coords.latitude;
          this.position.coords.longitude = position.coords.longitude;
          this.position.timestamp = position.timestamp;
        }
      },
        (error) => console.log(error));
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  getDistance() {
    this.gpsService.getDistance(this.position).subscribe((location: LocationModel) => {
      this.location = location;
    });
  }
}
