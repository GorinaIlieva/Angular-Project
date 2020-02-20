import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/theCore/services/authService/authentication.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) { }
// login(data:NgForm){
//   console.log(data)
// }
  
  async login(username: string, password: string) {
    try {
      const user = await this.userService.login(username, password);
      this.authService.saveUserInfo(user)
      
      this.router.navigate(['/home'])

    } catch (error) {

      console.log(error);
    }
  }

  ngOnInit() {
  }

}

