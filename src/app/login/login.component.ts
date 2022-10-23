import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthService } from '../service/auth.service';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  //<!-- Property declaration -->
  fieldTextType: boolean;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,
   public router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      //this.reloadPage();
    }
  }
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        sessionStorage.setItem('isLoggedIn', 'true');
        this.router.navigate(['/dashboard']);
       this.roles = this.tokenStorage.getUser().roles;
      // window.location.reload();
      //window.location.reload();
     
       this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    //nawel123456789 
  }
  reloadPage(): void {
   
  }


  
  
 // <!-- Switching method -->
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  }

// Login(){
//   let resp = this.service.login(this.username ,  this.password);
//   resp.subscribe(data=> {
//     this.message=data;

//     this.router.navigate(["/home"])
//     this.invalidLogin = false
//     console.log(data);
//   })
// }
// checkLogin() {
//   if (this.service.authenticate(this.username, this.password)
//   ) {
//     this.router.navigate([''])
//     this.invalidLogin = false
//   } else
//     this.invalidLogin = true
// }


