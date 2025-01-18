import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './MainLayout/main.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MenuItemsComponent } from './menu-slider/menu-items/menu-items.component';


//#region ================= Prime ng ===============
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { DockModule } from 'primeng/dock';
import { MenuSliderComponent } from './menu-slider/menu-slider.component';
import { MenuModule } from 'primeng/menu';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { ScrollerModule } from 'primeng/scroller';
//#endregion

@NgModule({
  declarations: [
    LoginComponent,
    MainLayoutComponent,
    NavBarComponent,
    MenuSliderComponent,
    MenuItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ButtonModule,
    SidebarModule,
    DockModule,
    MenuModule,
    PasswordModule,
    InputTextModule,
    ScrollerModule
  ],
  exports: [MainLayoutComponent]
})
export class LayoutModule { }
