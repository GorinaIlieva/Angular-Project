import { Component, OnInit, Input } from '@angular/core';
import ServiceEachSection from '../../models/service-section-interface/serviceEachSection';



@Component({
  selector: 'app-service-each-section',
  templateUrl: './service-each-section.component.html',
  styleUrls: ['./service-each-section.component.scss']
})
export class ServiceEachSectionComponent implements OnInit {

  @Input()
  serviceEachSection: ServiceEachSection

  constructor() { }

  ngOnInit() {
    // console.log(this.serviceEachSection)
  }

}
