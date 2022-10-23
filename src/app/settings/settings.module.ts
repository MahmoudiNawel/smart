import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SettingsRegisterComponent } from './settings-register/settings-register.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatCard, MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SettingsModuleComponent } from './settings-module/settings-module.component';
import { AddDialogComponent } from './add-dialog/add-dialog.component';


@NgModule({
  declarations: [
    SettingsComponent,
    SettingsRegisterComponent,
    SettingsModuleComponent,
    AddDialogComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,



    HttpClientModule,
    ChartsModule,
    MatPaginatorModule,
    //MatProgressSpinnerModule,
    //MatSortModule,
    //MatTableModule,entModule,
    ChartsModule,
    MatPaginatorModule,
    //MatProgressSpinnerModule,
    //MatSortModule,
   // MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    //MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatCheckboxModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    OverlayModule,
  ]
})
export class SettingsModule { }
