import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PostService } from '../../services/post-services/post.service';
import { PostEach } from 'src/app/components/shared/models/postEach-interface/post-each';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsResolverService implements Resolve<PostEach>{

  constructor(
    private postService: PostService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.params['id']
    return this.postService.getPostById(id)

  }



}
