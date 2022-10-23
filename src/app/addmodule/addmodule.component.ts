import { Component, EventEmitter, OnInit } from '@angular/core';
//import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
//import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {formData} from './datas'
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-addmodule',
  templateUrl: './addmodule.component.html',
  styleUrls: ['./addmodule.component.scss']
})
export class AddmoduleComponent implements OnInit {

    form: FormGroup;
    private formSubmitAttempt: boolean;
    //etage = '';
    industry = '';
    experience = 0;
    data: any;
    //matcher = new MyErrorStateMatcher();
    etages: any[] = ['Etage 1', 'Etage 2'];
    Bureau: any[]= ['Bureau 1' , 'Bureau 2' , 'Bureau 1' ]
    selectedContinent: string;
    formData =formData;
    skills: any[] = [ 'Temperature', 'Humidité', 'Gaz', 'Présence'];
    public event: EventEmitter<any> = new EventEmitter();
    errorMessage = '';

//////////////////


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
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
      
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
  
  get filteredFormData() {
    // selectedContinent would be undefined if no option is selected
    // therefore, we return all of the continents
    if (!this.selectedContinent) return formData;
    // filter out all of the continents that don't match the criteria
    console.log (formData.filter(entry => entry.Continent === this.selectedContinent));
    return formData.filter(entry => entry.Continent === this.selectedContinent)
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




  ///////////

  
  editInfo(educationInfo) {
    this.education_level = educationInfo.aa;
    this.exam_title = educationInfo.bb;
    this.gender = educationInfo.cc;
    this.educationLevelChangeAction(this.education_level);
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

  
}
