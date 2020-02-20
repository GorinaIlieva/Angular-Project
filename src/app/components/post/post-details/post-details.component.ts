import { Component, OnInit } from '@angular/core';
import { PostEach } from '../../shared/models/postEach-interface/post-each';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  postEach: PostEach

  constructor(
    private activatedRouter: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {

    this.postEach= this.activatedRouter.snapshot.data[0]
  }

  goBack(){
    this.location.back()
  }
  
}
