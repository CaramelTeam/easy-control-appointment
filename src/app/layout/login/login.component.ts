import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
     document.cookie = `$loginUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

    user: string = '';
    password: string = ''

    saveData(){
      const date = new Date();
      date.setTime(date.getTime() + .5 * 24 * 60 * 60 * 1000); // Convertir días a milisegundos
      const expires = `expires=${date.toUTCString()}`;
      document.cookie = `$loginUser=${this.user}; ${expires}; path=/`;
      window.location.href = '';
    }
}
