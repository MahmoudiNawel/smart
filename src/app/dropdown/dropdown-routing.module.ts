import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { DropdownComponent } from './dropdown.component';
import { StationHistoriqueComponent } from './station-historique/station-historique.component';

const routes: Routes = [
{
  path: 'create',
  component: DropdownComponent,
},
{
  path: 'historique',
  component: StationHistoriqueComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DropdownRoutingModule { }
