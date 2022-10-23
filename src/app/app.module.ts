import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RoomComponent } from './room/room.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatButtonModule} from '@angular/material/button';
import { APP_BASE_HREF } from '@angular/common';
import { MatTabsModule} from '@angular/material/tabs';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RegisterComponent } from './register/register.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
//import {AuthInterceptor} from '../auth.interceptor';
//import { AuthGaurdService } from './service/auth-gaurd.service';
import { ChartsModule } from 'ng2-charts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AuthService } from './services/auth.service';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { RouterModule } from '@angular/router';
import { authInterceptorProviders  } from './auth.interceptor';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import {  OverlayModule } from '@angular/cdk/overlay';
//import {CdkMenuModule} from '@angular/cdk/menu'
import { AddmoduleComponent } from './addmodule/addmodule.component';
import { MatSelectModule } from '@angular/material/select';
import { RequestresetComponent } from './requestreset/requestreset.component';
import { ResponserequestComponent } from './responserequest/responserequest.component';
import { MqttModule, IMqttServiceOptions } from "ngx-mqtt";

import { MymqttserviceModule } from './services/mymqttservice/mymqttservice.module';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
   // HeaderComponent,
    DashboardComponent,
    SidenavComponent,
    RoomComponent, 
    RegisterComponent, LogoutComponent, LoginComponent, BoardAdminComponent, BodyComponent, SublevelMenuComponent, AddmoduleComponent, RequestresetComponent, ResponserequestComponent
  ],
  exports :[    

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
 
    // * MATERIAL IMPORTS
    NgMultiSelectDropDownModule.forRoot(),
    MatTabsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    //MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    OverlayModule,
    MatDialogModule,
    //CdkMenuModule 
   // SocketIoModule.forRoot(config)
   MymqttserviceModule,
  ],
  schemas:[NO_ERRORS_SCHEMA], 
  providers: [AuthService ,
    authInterceptorProviders ] ,
  bootstrap: [AppComponent],
})
export class AppModule {}
// {provide: APP_BASE_HREF, useValue: '/'}