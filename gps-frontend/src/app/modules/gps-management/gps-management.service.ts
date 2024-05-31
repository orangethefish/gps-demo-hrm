import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Position } from './position.model';
import { LocationModel } from './location.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GpsService{
    baseUrl = environment.baseUrl;

    constructor(private http: HttpClient){}
    getDistance(position): Observable<LocationModel>{
        return this.http.post<LocationModel>(this.baseUrl + '/gps/distance', position);
    }
}