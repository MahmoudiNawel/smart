import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Etage2Component } from './etage2.component';
import { Etage2RoutingModule } from './etage2-routing.module';
import { Etage2LevelThreeTwoComponent } from './etage2-level-three-two/etage2-level-three-two.component';
import { Etage2LevelThreeOneComponent } from './etage2-level-three-one/etage2-level-three-one.component';
import { Etage2LevelThreeConfortComponent } from './etage2-level-three-confort/etage2-level-three-confort.component';


@NgModule({
  declarations: [
    Etage2Component,
    Etage2LevelThreeOneComponent,
   Etage2LevelThreeTwoComponent,
   Etage2LevelThreeConfortComponent

  ],
  imports: [
    CommonModule,
    Etage2RoutingModule
  ]
})
export class Etage2Module { }
