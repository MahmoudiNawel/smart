import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const AUTH_API = 'http://localhost:3000/api/auth/';
const BASEURL = 'http://localhost:3000';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  socket : Socket;

 // constructor() { this.socket = io("http://localhost:3000")
 constructor( private http: HttpClient) { 
   }
    createmodule(data): Observable<any> {
      return this.http.post(AUTH_API + 'createmodel' , {
        AddIP : data.AddIP ,
        nom : data.nom,
        capteur : data.capteur,

      })
    }
   login(credentials): Observable<any> {
   // console.log("credentials", credentials);
    return this.http.post(AUTH_API + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }
  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
  requestReset(body): Observable<any> {
    return this.http.post(`${BASEURL}/req-reset-password`, body);
  }

  newPassword(body): Observable<any> {
    return this.http.post(`${BASEURL}/new-password`, body);
  }

  ValidPasswordToken(body): Observable<any> {
    return this.http.post(`${BASEURL}/valid-password-token`, body);
  }
  FindModel():Observable<any> {
    return this.http.get('${BASEURL}/datamodule')

  }
//   listen(eventname: string) : Observable<any> {
//     return new Observable((subscriber) => {
//         this.socket.on(eventname, (data) => {
//             subscriber.next(data);
//         })
//     })
// }
// emit(eventname: string, data: any) {
//   this.socket.emit(eventname, data);



  // setupSocketConnection() {
   
  //   this.socket.emit('my message', 'Hello there from Angular.');
  //   this.socket.on('my broadcast', (data: string) => {
  //     console.log(data);
  //   });
  // }
}
