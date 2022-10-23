import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
 
  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
  (response) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  }, 
  
 
);

  }


}
