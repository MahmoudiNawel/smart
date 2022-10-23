import { Component, OnInit } from '@angular/core';
//import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor( private authService : AuthService

  ) { }

  ngOnInit() {
    //this.authService.setupSocketConnection
    // this.authentocationService.logOut();
    // this.router.navigate(['dropdown']);
  }

}
