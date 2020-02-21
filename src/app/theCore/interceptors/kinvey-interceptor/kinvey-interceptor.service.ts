import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../services/authService/authentication.service';
import { map } from 'rxjs/operators';
import { APP_KEY, APP_SECRET } from 'src/app/kinvey.credentials';

@Injectable({
  providedIn: 'root'
})
export class KinveyInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('request', request)
    if (request.url.endsWith(`/user/${APP_KEY}`) || request.url.endsWith('login')) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Baisc ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
          'Content-Type': 'application/json'
        }
      })
    } else {
      request = request.clone({
        headers: request.headers.set('Authorization', `Kinvey ${this.authService.authtoken}`)
      });


      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
      
    }
    return next.handle(request)

  }
}
// let jsonReq= request.clone({
//   setHeaders:{
//     Authorization:`Kinvey ${this.authService.authtoken}`,
//     }
// }) 
