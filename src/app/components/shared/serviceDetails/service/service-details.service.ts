import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators'
import ServiceDetails from '../../models/service-details-interface/serviceDetails';

// const headers = {
//   method: 'GET',
//   headers: {
//     'Authorization': 'Kinvey 6ba4f0cc-6d7e-46e2-a3cd-a42663ee1576.OGShy0Z4Exm2/kkDnelxUTvXJu450mFYZZatw7lRHfA=',
//     'Content-Type': 'application/json'
//   }
// };

@Injectable({
  providedIn: 'root'
})
export class ServiceDetailsService {

  constructor(private http:HttpClient) { }

  getServiceById(id:string){
    return this.http.get<ServiceDetails>(`https://baas.kinvey.com/appdata/kid_SyEqVU_GL/services/${id}`,
// headers
)
  }

}
