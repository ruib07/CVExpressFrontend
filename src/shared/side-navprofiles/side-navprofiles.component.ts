import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-navprofiles',
  templateUrl: './side-navprofiles.component.html',
  styleUrls: ['./side-navprofiles.component.css'],
})
export class SideNavprofilesComponent {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/Authentication/User-Login']);
  }
}
