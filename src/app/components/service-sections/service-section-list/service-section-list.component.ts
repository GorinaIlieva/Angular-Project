import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ServiceEachSection from '../../shared/models/service-section-interface/serviceEachSection';



@Component({
  selector: 'app-service-section-list',
  templateUrl: './service-section-list.component.html',
  styleUrls: ['./service-section-list.component.scss']
})
export class ServiceSectionListComponent implements OnInit {

  cmServiceList: ServiceEachSection[]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
 
    this.cmServiceList = this.activatedRoute.snapshot.data[0]
    

  }

}
