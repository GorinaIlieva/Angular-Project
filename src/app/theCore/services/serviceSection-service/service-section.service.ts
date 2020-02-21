import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { APP_KEY } from 'src/app/kinvey.credentials';
import ServiceEachSection from 'src/app/components/shared/models/service-section-interface/serviceEachSection';



@Injectable({
  providedIn: 'root'
})
export class ServiceSectionService {

  constructor(private http: HttpClient) { }

  getCmServiceList() {
    return this.http.get<ServiceEachSection[]>(`https://baas.kinvey.com/appdata/${APP_KEY}/customermanagement`)
  }

  getCleaningServiceList() {
       return this.http.get<ServiceEachSection[]>(`https://baas.kinvey.com/appdata/${APP_KEY}/cleaning`)
  }

  getGuestManagementServiceList(){
    return this.http.get<ServiceEachSection[]>(`https://baas.kinvey.com/appdata/${APP_KEY}/guestmanagement`)
  }

  getPropertyManagementServiceList(){
    return this.http.get<ServiceEachSection[]>(`https://baas.kinvey.com/appdata/${APP_KEY}/propertymanagement`)
  }
}
