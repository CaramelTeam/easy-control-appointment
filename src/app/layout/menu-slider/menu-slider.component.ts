import { Component } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-menu-slider',
  templateUrl: './menu-slider.component.html',
  styleUrls: ['./menu-slider.component.scss']
})
export class MenuSliderComponent {
  items: MenuItem[] | undefined;

  constructor() {}

  ngOnInit() {
      this.items = [
          {
              label: 'Options',
              items: [
                  {
                      label: 'Update',
                      icon: 'pi pi-refresh',
                      command: () => {
                          alert('update')
                      }
                  },
                  {
                      label: 'Delete',
                      icon: 'pi pi-times',
                      command: () => {
                          alert('Delete')
                      }
                  }
              ]
          },
          {
              label: 'Navigate',
              items: [
                  {
                      label: 'Angular',
                      icon: 'pi pi-external-link',
                      url: 'http://angular.io'
                  },
                  {
                      label: 'Router',
                      icon: 'pi pi-upload',
                      routerLink: '/fileupload'
                  }
              ]
          }
      ];
  }


}
