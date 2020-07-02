import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { error } from 'protractor';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in successfully! ' + this.model.username);
      alert(this.model.username);
    }, error => {
      console.log('Failed login ' + this.model.username);
      alert(this.model.username);
    });
  }

  loggedIn(): boolean {
    const token = localStorage.getItem('token');
    return (token) ? true : false;
  }

  logout(){
    localStorage.removeItem('token');
    console.log('Logged out')
  }
}
