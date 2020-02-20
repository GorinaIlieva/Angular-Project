import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { ServiceSectionService } from '../service/service-section.service'
import ServiceEachSection from '../../models/service-section-interface/serviceEachSection'


@Injectable({
    'providedIn': 'root'
})

export class ServiceSectionListCleaningResolver implements Resolve<ServiceEachSection[]>{

    constructor(private serviceSectionService: ServiceSectionService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       
        return this.serviceSectionService.getCleaningServiceList()
    }

}