import { Component, OnInit } from '@angular/core';
import { PostEach } from 'src/app/components/shared/models/postEach-interface/post-each';

import { ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-post-all',
  templateUrl: './post-all.component.html',
  styleUrls: ['./post-all.component.scss']
})
export class PostAllComponent implements OnInit {
  postAll:PostEach[]
  
  
  constructor(
    private activatedRoute: ActivatedRoute,
    
    
  ) { }

  ngOnInit() {  
    console.log('in posts all')
       this.postAll = this.activatedRoute.snapshot.data[0]
  
  }
 
  
 
}
