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


  items: MenuItem[] | undefined;

  position: string = 'top';

  ngOnInit() {
    this.items = [
      {
        label: 'Finder',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
        command: () => {
          this.layoutServ.viewMenuFunc();
        }
      },
      {
        label: 'App Store',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg'
      },
      {
        label: 'Photos',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg'
      },
      {
        label: 'Trash',
        icon: 'https://primefaces.org/cdn/primeng/images/dock/trash.png'
      }
    ];
  }
}
