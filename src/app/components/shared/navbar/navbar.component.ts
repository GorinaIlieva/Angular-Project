import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk'
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/theCore/services/authService/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, DoCheck {
  isLoggedIn: boolean;
  username: string

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router,

  ) { }

  ngOnInit(){}

  ngDoCheck() {
    
    this.isLoggedIn = this.authService.isAuthenticated()
   
    this.username = localStorage.getItem('user')
    
    
  }


  async logout() {
    try {
      await this.userService.logout()
      
      localStorage.clear()
     
      this.router.navigate(['/home'])
      
    } catch (error) {
      console.log(error);
    }

  }

  
}
