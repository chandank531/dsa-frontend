import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  firstName: string | null = null;

  constructor(private router: Router, private authenticationService: AuthenticationService) {} 

  ngOnInit(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const parsedUser = JSON.parse(currentUser);
      this.firstName = parsedUser?.data?.student?.firstName || 'Guest';
    }
  }

  logout() {
    this.authenticationService.logout();
  }
}
