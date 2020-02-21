import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';


import ServiceDetails from 'src/app/components/shared/models/service-details-interface/serviceDetails';
import { ServiceDetailsService } from '../../services/details-service/service-details.service';

@Injectable({
    'providedIn': 'root'
})

export class ServiceDetailsResolver implements Resolve<ServiceDetails>{
    constructor(private serviceDetailsService: ServiceDetailsService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const id = route.params['id']
                
        return this.serviceDetailsService.getServiceById(id)

    }

}