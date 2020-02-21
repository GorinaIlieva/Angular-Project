import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseHandlerInterceptorService implements HttpInterceptor {

  constructor(public toastr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).pipe(
      tap((succ) => {
        if (succ instanceof HttpResponse) {
          // if (succ.url.endsWith('login') || succ.url.endsWith('signup') || succ.url.endsWith('create') || succ.url.includes('delete')) {
        //  console.log(succ)
            return this.toastr.success('Success', 'Success')
          // }
        }
      }),
      catchError((error: HttpErrorResponse) => {
        // if (error.error instanceof ErrorEvent) {
          console.log(error)
          this.toastr.error('Error', 'Error')
          return throwError
        

      }))
  }
}


