import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authService/authentication.service';
import { map } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
 })
export class KinveyInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   

    // let jsonReq= request.clone({
    //   setHeaders:{
    //     Authorization:`Kinvey ${this.authService.authtoken}`,
    //     }
    // }) 
    request = request.clone({
      headers: request.headers.set('Authorization', `Kinvey ${this.authService.authtoken}`)});

  
    request = request.clone({ 
      headers: request.headers.set('Content-Type', 'application/json') });



      return next.handle(request)
      // .pipe((
      //   map((event: HttpEvent<any>) => {
      //     if (event instanceof HttpResponse) {
      //       // console.log('event--->>>', event);
      //     }
      //     return event;
      //   })
      // ))

    }


}
