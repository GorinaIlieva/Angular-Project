import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/theCore/services/authService/authentication.service';

@Component({
  selector: 'app-jumbotron-landing-page',
  templateUrl: './jumbotron-landing-page.component.html',
  styleUrls: ['./jumbotron-landing-page.component.scss']
})
export class JumbotronLandingPageComponent implements OnInit {
isLoggedIn: boolean
  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.isLoggedIn= this.authService.isAuthenticated()
  }

}
