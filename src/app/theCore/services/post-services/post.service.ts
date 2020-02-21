import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_KEY } from 'src/app/kinvey.credentials';
import { PostEach } from 'src/app/components/shared/models/postEach-interface/post-each';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  

  constructor(private http: HttpClient) { }

 
  createPost(data) {
    return this.http.post(`https://baas.kinvey.com/appdata/${APP_KEY}/listenings`, data)
  }

  getPostById(id:string){
    return this.http.get<PostEach>(`https://baas.kinvey.com/appdata/${APP_KEY}/listenings/${id}`)
  }

  getAllPosts():Observable<PostEach[]>{
    
    return this.http.get<PostEach[]>(`https://baas.kinvey.com/appdata/${APP_KEY}/listenings`)
  }

  deletePost(id:string){
    
    return this.http.delete<PostEach>(`https://baas.kinvey.com/appdata/${APP_KEY}/listenings/${id}`)
  }

  editPost(id, data){
    return this.http.put(`https://baas.kinvey.com/appdata/${APP_KEY}/listenings/${id}`, data)
  }
}
