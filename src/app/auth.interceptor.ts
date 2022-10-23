import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenStorageService } from './services/token-storage.service';
const TOKEN_HEADER_KEY = 'x-access-token';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private token: TokenStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   let authreq = request
   const token = this.token.getToken();
   if (token!= null){
    authreq = request.clone({headers : request.headers.set(TOKEN_HEADER_KEY, 'Bearer' + token)});

   }
   
    return next.handle(request);
  }

}
 export const authInterceptorProviders = [
   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
 ];
