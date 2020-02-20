import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Service from 'src/app/components/shared/models/service-Interface/service';
import { APP_KEY } from 'src/app/kinvey.credentials';

@Injectable({
  providedIn: 'root'
})
export class ServiceServicesService {

  constructor(private http: HttpClient) { }

  getAllServices() {
    return this.http.get<Service[]>(`https://baas.kinvey.com/appdata/${APP_KEY}/services`)
  }
}





