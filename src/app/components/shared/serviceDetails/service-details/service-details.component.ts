import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'

import { Location } from '@angular/common';
import ServiceDetails from '../../models/service-details-interface/serviceDetails';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.scss']
})
export class ServiceDetailsComponent implements OnInit {
  id: string;
  oneService: ServiceDetails;
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.oneService = this.route.snapshot.data[0]
    

  }
  goBack() {
    this.location.back()
  }

}
