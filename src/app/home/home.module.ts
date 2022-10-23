import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListModuleComponent } from './list-module/list-module.component';


@NgModule({
  declarations: [HomeComponent,
                ListModuleComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule 
  ]
})
export class HomeModule { }
