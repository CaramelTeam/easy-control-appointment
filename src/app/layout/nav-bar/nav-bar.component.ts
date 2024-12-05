import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public layoutServ: LayoutService){}

  ngOnInit() {

  }
}
