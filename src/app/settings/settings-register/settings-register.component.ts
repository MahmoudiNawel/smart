import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings-register',
  templateUrl: './settings-register.component.html',
  styleUrls: ['./settings-register.component.scss']
})
export class SettingsRegisterComponent implements OnInit {
 
  constructor( private authService: AuthService) { }
  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.authService.register(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }
}
