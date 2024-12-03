import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


    user: string = '';
    password: string = ''

    saveData(){
      console.log(this.user + ' ' + this.password);
      localStorage.setItem('token', this.user);
    }
}
