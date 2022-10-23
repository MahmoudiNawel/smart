import { Component, OnInit } from '@angular/core';
import { IDropdownSettings, } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent  implements OnInit{
composant = ["Temperature" , "Humidity" , "Ligthing"]


dropdownList;
dropDownForm:FormGroup;
selectedItems=[];
dropdownSettings:IDropdownSettings
myForm: FormGroup;

  constructor(private formBuilder : FormBuilder,
    public dialog: MatDialog){
      
  }
  openDialog() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      width : "50%",
     // height : "100%"

   // dialogRef.afterClosed().subscribe(result => {
      //console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(){
    this.initForm();
    this.dropdownList = this.getData();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All'
    };
    this.dropdownSettings= {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 10,
        allowSearchFilter: true
      };
    }

  initForm(){
    this.myForm = this.formBuilder.group({
      grocery : ['',[Validators.required]]
    })
  }

  handleButtonClick(){
    console.log('reactive form value ', this.myForm.value);
    console.log('Actual data ', this.getObjectListFromData(this.myForm.value.grocery.map(item => item.item_id)));
  }

  onItemSelect($event){
    console.log('$event is ', $event); 
  }

  getObjectListFromData(ids){
    return this.getData().filter(item => ids.includes(item.item_id))
  }

  getData() : Array<any>{
    return [
      { item_id: 1, item_text: 'Temperature', group : 'V' },
      { item_id: 2, item_text: 'Humidity', group : 'V' },
      { item_id: 3, item_text: 'Lighting', group : 'V' },
      { item_id: 4, item_text: 'Gaz', group : 'V' },
      
    ];
  }

  setDefaultSelection(){
    let item = this.getData()[0];
    this.myForm.patchValue({
      grocery : [{
        item_id : item['item_id'],
        item_text : item['item_text']
      }]  
    })
  }


}