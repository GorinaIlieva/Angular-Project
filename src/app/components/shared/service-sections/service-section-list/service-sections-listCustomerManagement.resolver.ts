import {Injectable} from '@angular/core'
import {ServiceSectionService} from '../service/service-section.service'
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router'

import ServiceEachSection from '../../models/service-section-interface/serviceEachSection'


@Injectable ({
    providedIn:'root'
})

export class ServiceSectionListResolver implements Resolve <ServiceEachSection[]>{
 
    constructor (private serviceSectionService: ServiceSectionService){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
       
         return this.serviceSectionService.getCmServiceList()
    }

}