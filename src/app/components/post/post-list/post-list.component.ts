import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../../../theCore/services/post-services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
  // createForm: NgForm;
  constructor(
    private postService: PostService,
    private router: Router) { }

  create(createForm: NgForm) {
    return this.postService.createPost(createForm).subscribe(()=>{
     
      this.router.navigate(['posts','all'])
    })
  }

  // get cF() {
  //   return this.createForm.controls
  // }
  // get invalid() {
  //   return this.createForm.invalid
  // }

  ngOnInit() {
  }

}
