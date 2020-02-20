import { Injectable } from '@angular/core';
import { PostService } from '../post-services/post.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 

  constructor(
    private postService:PostService
  ) { }

  saveUserInfo(user:Object){
    localStorage.setItem('authtoken', user['_kmd']['authtoken']);
    localStorage.setItem('creator', user ['_acl']['creator']);
    localStorage.setItem('user', `${user ['data'] ['firstName']} ${user ['data']['lastName']}`)
    localStorage.setItem('username', user['username'])
  }

isAuthenticated(){
  return this.authtoken !== null
}

get authtoken(){
   return localStorage.getItem('authtoken')
}

isAuthorOr(post: Object){
  return post['_acl']['creator']===localStorage.getItem('creator')
}

}
