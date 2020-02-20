import { Component, OnInit, DoCheck } from '@angular/core';
import { AuthenticationService } from 'src/app/theCore/services/authService/authentication.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, DoCheck {
  isLoggedIn: boolean;
  constructor(
    private authService: AuthenticationService
  ) { }
 ngOnInit() {}
  
ngDoCheck(){
  this.isLoggedIn = this.authService.isAuthenticated()
}
 
  
}
