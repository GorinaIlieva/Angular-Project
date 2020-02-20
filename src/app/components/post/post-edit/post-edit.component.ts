import { Component, OnInit } from '@angular/core';
import { PostEach } from '../../shared/models/postEach-interface/post-each';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { PostService } from 'src/app/theCore/services/post-services/post.service';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.scss']
})
export class PostEditComponent implements OnInit {
  postEach: PostEach
  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) { }

  ngOnInit() {

    this.postEach = this.activatedRoute.snapshot.data[0]
    console.log(this.postEach)
  }

  edit(id: string, editForm: NgForm) {
  //  console.log(id)
  //  console.log(editForm)

   this.postService.editPost(id, editForm).subscribe(()=>{
    this.router.navigate(['/posts/all'])
   })
  }

}
