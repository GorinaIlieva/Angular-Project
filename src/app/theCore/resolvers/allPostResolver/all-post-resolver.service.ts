import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { PostEach } from 'src/app/components/shared/models/postEach-interface/post-each';
import { PostService } from '../../services/post-services/post.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AllPostResolver implements Resolve <PostEach[]> {

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    console.log('in the resolver')
    return this.postService.getAllPosts()
     .pipe(tap(data=>{console.log('data from the allResolver', data)}))
  }
}
