import { Injectable } from '@angular/core'
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

import { ServiceDetailsService } from '../../../components/shared/serviceDetails/service/service-details.service';
import ServiceDetails from 'src/app/components/shared/models/service-details-interface/serviceDetails';

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