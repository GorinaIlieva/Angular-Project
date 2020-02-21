import {Injectable} from '@angular/core'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ServiceSectionService } from '../../services/serviceSection-service/service-section.service';
import ServiceEachSection from '../../../components/shared/models/service-section-interface/serviceEachSection';



@Injectable({
    providedIn:'root'
})

export class ServiceGuestManagementResolver implements Resolve<ServiceEachSection[]>{

    constructor(private serviceSectionService: ServiceSectionService){ }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.serviceSectionService.getGuestManagementServiceList()
    }
}