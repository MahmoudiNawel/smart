import { Component, OnInit, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

//import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
//import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  form: FormGroup;
    private formSubmitAttempt: boolean;
    //etage = '';
    industry = '';
    experience = 0;
    data: any;
    //matcher = new MyErrorStateMatcher();
    Capteur: any[] = [ 'Temperature', 'Humidité', 'Gaz', 'Présence'];
    education_level;
    exam_title;
    gender;
    degreeTitleList = [];
    
    educationList: any = [
      {
        'educationLevelName': 'Etage 1',
        degreeTitleList: [
          'Bureau 1', 'Bureau 2', 'Other',
        ]
      },
      {
        'educationLevelName': 'Etage 2',
        degreeTitleList: [
          'Bureau 1', 'Bureau 2', 'Bureau 2'
        ]
      },
      {
        'educationLevelName': 'Secondary',
        degreeTitleList: [
          'SSC', 'O Level', 'Other',
        ]
      }
    ];
    public event: EventEmitter<any> = new EventEmitter();
    errorMessage = '';
  constructor(
    private fb: FormBuilder,
    private authService : AuthService
  ) { }
  oncreate(): void {
    this.data = this.form.getRawValue() //or we can use this.form.value
    this.authService.createmodule(this.data).subscribe(
      data => {
            console.log('model created')  
        //this.roles = this.tokenStorage.getUser().roles;
       
        //this.router.navigate(['dashboard']);
       // this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
      
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
  
  educationLevelChangeAction(education) {
    this.exam_title="";
    let dropDownData = this.educationList.find((data: any) => data.educationLevelName === education);
    if (dropDownData) {
      this.degreeTitleList = dropDownData.degreeTitleList;
      if(this.degreeTitleList){
        this.exam_title=this.degreeTitleList[0];
      }
      
    } else {
      this.degreeTitleList = [];
    }

  }

  ngOnInit(){
    this.form = this.fb.group({
        etage: ['', Validators.required],
        AddIP: ['', Validators.required],
        nom: ['', Validators.required]
       
      });
  }
  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
  console.log("loaded")
  }
  
  close(){
    //this.dialogRef.close(true);
 }


}
