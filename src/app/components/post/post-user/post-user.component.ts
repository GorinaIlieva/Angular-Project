import { Component, OnInit } from '@angular/core';
import { PostEach } from '../../shared/models/postEach-interface/post-each';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/theCore/services/authService/authentication.service';

@Component({
  selector: 'app-post-user',
  templateUrl: './post-user.component.html',
  styleUrls: ['./post-user.component.scss']
})
export class PostUserComponent implements OnInit {
postAll: PostEach[]
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService:AuthenticationService
  ) { }

  ngOnInit() {
    this.postAll=this.activatedRoute.snapshot.data[0]
  }

  isAuthor (post:Object) {
    return this.authService.isAuthorOr(post)
  }

}
