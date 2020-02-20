import { Component, OnInit, Input } from '@angular/core';
import { PostEach } from 'src/app/components/shared/models/postEach-interface/post-each';
import { AuthenticationService } from 'src/app/theCore/services/authService/authentication.service';
import { PostService } from 'src/app/theCore/services/post-services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-each',
  templateUrl: './post-each.component.html',
  styleUrls: ['./post-each.component.scss']
})
export class PostEachComponent implements OnInit {

  @Input('postEach') public postEach: PostEach
  postAll: PostEach[]

  constructor(
    private authService: AuthenticationService,
    public postService: PostService,
    public router: Router,
  ) { }

  ngOnInit() {

  }

  deletePost(id: string) {
    this.postService.deletePost(id).subscribe(() => {
      

     this.router.navigate(['/posts/all']).then(() => console.log('redirected'))

    });
  }

  isAuthor(post: Object) {
    console.log('the comp')
    return this.authService.isAuthorOr(post)
  }

}
