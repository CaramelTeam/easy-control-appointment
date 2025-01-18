import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//#region ====== Component´s
import { PagesRoutingModule } from './pages-routing.module';
import { SettingsComponent } from './settings/settings.component';
//#endregion

//#region ====== PrimeNg Modul's

//#endregion

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
