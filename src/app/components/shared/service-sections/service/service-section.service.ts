import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { APP_KEY } from 'src/app/kinvey.credentials';
import ServiceEachSection from '../../models/service-section-interface/serviceEachSection';

const headers = {
  method: 'GET',
  headers: {
    'Authorization': 'Kinvey 6ba4f0cc-6d7e-46e2-a3cd-a42663ee1576.OGShy0Z4Exm2/kkDnelxUTvXJu450mFYZZatw7lRHfA=',
    'Content-Type': 'application/json'
  }
};



@Injectable({
  providedIn: 'root'
})
export class ServiceSectionService {

  constructor(private http: HttpClient) { }

  getCmServiceList() {
    return this.http.get<ServiceEachSection[]>(`https://baas.kinvey.com/appdata/${APP_KEY}/customermanagement`, headers)
  }

  getCleaningServiceList() {
       return this.http.get<ServiceEachSection[]>(`https://baas.kinvey.com/appdata/${APP_KEY}/cleaning`, headers)
  }

  getGuestManagementServiceList(){
    return this.http.get<ServiceEachSection[]>(`https://baas.kinvey.com/appdata/${APP_KEY}/guestmanagement`, headers)
  }

  getPropertyManagementServiceList(){
    return this.http.get<ServiceEachSection[]>(`https://baas.kinvey.com/appdata/${APP_KEY}/propertymanagement`, headers)
  }
}
