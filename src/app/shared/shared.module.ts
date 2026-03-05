import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ToastComponent } from './components/toast/toast.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { DataTableComponent } from './components/data-table/data-table.component';

const MATERIAL_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatProgressSpinnerModule, MatSnackBarModule, MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule, MatTabsModule];

@NgModule({
  declarations: [HeaderComponent, SidebarComponent, LoaderComponent, ToastComponent, FormInputComponent, DataTableComponent],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ...MATERIAL_MODULES],
  exports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, ...MATERIAL_MODULES, HeaderComponent, SidebarComponent, LoaderComponent, ToastComponent, FormInputComponent, DataTableComponent]
})
export class SharedModule {}
