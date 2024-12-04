import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor() { }

  public viewMenu: boolean = false;

  public viewMenuFunc(){
    this.viewMenu = true;
  }

}
