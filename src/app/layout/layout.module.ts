import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './MainLayout/main.component';



@NgModule({
  declarations: [
    LoginComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [MainLayoutComponent]
})
export class LayoutModule { }
