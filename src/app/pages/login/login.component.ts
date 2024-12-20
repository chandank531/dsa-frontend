import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  submitted = false;
  email: string = '';
  password: string = '';
  returnUrl!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { 
    if(this.authenticationService.currentUserValue) {
      this.router.navigate(['/dsa-sheet']);
    }
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.submitted = true;
    this.authenticationService.login(this.email, this.password)
      .subscribe((response: any) => {
        console.log('login response', response);
        this.router.navigate(['/dsa-sheet']);
      },(error) => {
        alert(error);
      });
  }
}
