import { Component, OnInit } from '@angular/core';

import Service from '../../shared/models/service-Interface/service'

import { ServiceServicesService } from 'src/app/theCore/services/service-services/service-services.service';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  serviceList: Service[]
 
  constructor(private serviceServicesService: ServiceServicesService) { }

  ngOnInit() {
    this.serviceServicesService.getAllServices().subscribe(data => {
      this.serviceList = data
      
    })


  }

}
