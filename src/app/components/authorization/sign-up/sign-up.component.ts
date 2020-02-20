import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk'
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/theCore/services/authService/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) { }

  // signup(data:NgForm){
  //   console.log(data)
  // }
  async signup(data: NgForm) {
    try {
      const user = await this.userService.signup(data);
      this.authService.saveUserInfo(user)
      localStorage.setItem('newUser', JSON.stringify(user.data));
      this.router.navigate(['/home'])
    console.log(user)
    } catch (error) {
      console.log(error);

    }
  }
  ngOnInit() {
  }

}
