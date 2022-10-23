import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown.component';
import { StationHistoriqueComponent } from './station-historique/station-historique.component';


@NgModule({
  declarations: [
    DropdownComponent,
    StationHistoriqueComponent,
  ],
  imports: [
    CommonModule,
    DropdownRoutingModule
  ]
})
export class DropdownModule { }
