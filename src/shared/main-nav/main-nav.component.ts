import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
})
export class MainNavComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  user: any = {};

  ngOnInit() {
    this.getUtilizador();
  }

  getUtilizador() {
    const userId = this.getUtilizadorId();
    if (userId) {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        const headers = new HttpHeaders().set(
          'Authorization',
          `Bearer ${accessToken}`
        );

        this.http
          .get(`http://localhost:5181/RegisterUsers/${userId}`, { headers })
          .subscribe(
            (res: any) => {
              this.user = res;
              console.log('User data:', this.user);
            },
            (error) => {
              console.error('Error fetching user data: ', error);
            }
          );
      }
    }
  }

  getUtilizadorId(): string | null {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      const tokenParts = accessToken.split('.');
      if (tokenParts.length === 3) {
        const payload = JSON.parse(atob(tokenParts[1]));
        if (payload.Id) {
          return payload.Id;
        } else {
          console.error('User ID not found in payload:', payload);
        }
      }
    }
    return null;
  }

  logoutuser() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/Authentication/User-Login']);
  }
}
