import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Etage2LevelThreeConfortComponent } from './etage2-level-three-confort/etage2-level-three-confort.component';
import { Etage2LevelThreeOneComponent } from './etage2-level-three-one/etage2-level-three-one.component';
import { Etage2LevelThreeTwoComponent } from './etage2-level-three-two/etage2-level-three-two.component';

const routes: Routes = [
  {
    path: 'Bureau1.2',
    component: Etage2LevelThreeOneComponent

  },
  {
    path: 'Bureau1.3',
    component: Etage2LevelThreeTwoComponent

  },
  {
    path: 'Bureau1.4',
    component: Etage2LevelThreeConfortComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Etage2RoutingModule { }
