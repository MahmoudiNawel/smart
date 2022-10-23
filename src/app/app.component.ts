import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
//import * as socketIo from 'socket.io-client';
import { TokenStorageService } from './services/token-storage.service';
interface SideNavToggle {
  screenWidth : number;
  collapsed : boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent   {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;

  //////////////////
  title = 'admin-panel-layout';

  isSideNavCollapsed = false;
  screenWidth = 0;
  onToggleSideNav(data : SideNavToggle) : void {
    this.screenWidth =data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }
  constructor( private authService : AuthService ,
    private tokenStorageService: TokenStorageService,
    
 ){
  
 }
    ngOnInit() {
      this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      //this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
      this.username = user.username;
    }
      //this.authService.listen('chat').subscribe((data) => this.updateMessage(data));
      //this.authService.listen('hello').subscribe((data) => {  console.log(data) });
      //this.authService.listen('my message').subscribe((data) =>this.updateMessage(data));
   
    }


   

 
    

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
