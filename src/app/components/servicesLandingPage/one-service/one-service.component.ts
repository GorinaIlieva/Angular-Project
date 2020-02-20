import { Component, OnInit, Input } from '@angular/core';
import Service from '../../shared/models/service-Interface/service'


@Component({
  selector: 'app-one-service',
  templateUrl: './one-service.component.html',
  styleUrls: ['./one-service.component.scss'],
  
})
export class OneServiceComponent implements OnInit {

  @Input()
  oneService:Service

  constructor() { }

  ngOnInit() {
    
  }

}
