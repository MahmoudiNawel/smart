import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { RoomComponent } from './room/room.component';
import { RegisterComponent } from './register/register.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LoginComponent } from './login/login.component';
import { AddmoduleComponent } from './addmodule/addmodule.component';
import { RequestresetComponent } from './requestreset/requestreset.component';
import { ResponserequestComponent } from './responserequest/responserequest.component';
import { DropdownModule } from './dropdown/dropdown.module';
import { SettingsComponent } from './settings/settings.component';
import { SettingsRoutingModule } from './settings/settings-routing.module';
import { SettingsModule } from './settings/settings.module';

//import { AuthGaurdService } from './service/auth-gaurd.service';
const routes: Routes = [

   { path: '', redirectTo: 'login', pathMatch: 'full' },
   {
 path:'request-reset-password',
 component: RequestresetComponent
   },
   {
    path: 'response-reset-password/:token',
    component: ResponserequestComponent
   },
   {
    path: 'addmodule' , component: AddmoduleComponent
   },
  {path:'login' , component:LoginComponent},


   {path:'dropdown' , 
  loadChildren: () => import('./dropdown/dropdown.module').then(m =>DropdownModule),
},

{path:'settings' , 
loadChildren: () => import('./settings/settings.module').then(m =>SettingsModule),
},





   //{path:'logout' , component:LogoutComponent},
   {path:'register', component:RegisterComponent},


  { path: 'home', 
       loadChildren: () => import("./home/home.module").then(m => m.HomeModule)},
   { path: 'dashboard', component: DashboardComponent },
   { path: 'room', component: RoomComponent},
 
  { path:'etage2',
       loadChildren: () => import('./etage2/etage2.module').then(m => m.Etage2Module)},
  //  {
  //   path: '**',
  //   redirectTo:'login'
  //  }    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
