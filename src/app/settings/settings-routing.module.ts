import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsModuleComponent } from './settings-module/settings-module.component';
import { SettingsRegisterComponent } from './settings-register/settings-register.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  {
    path : 'register',
    component : SettingsRegisterComponent,
  },
  {
    path : 'customize',
    component : SettingsComponent,
  },
  {
    path : 'model',
    component : SettingsModuleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
