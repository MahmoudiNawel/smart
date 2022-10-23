import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListModuleComponent } from './list-module/list-module.component';
const routes: Routes = [
  {
    path: "Bureau1",
    component: HomeComponent
  },
  {
    path: "Liste",
    component: ListModuleComponent 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
