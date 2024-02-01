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

  responsavel: any = {};

  user: any = {};

  ngOnInit() {
    this.getUtilizador();
  }

  getUtilizador() {
    if (typeof localStorage !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');

      if (accessToken) {
        const headers = new HttpHeaders().set(
          'Authorization',
          `Bearer ${accessToken}`
        );

        this.http
          .get(`http://localhost:5181/Users/${this.getUtilizadorId()}`, {
            headers,
          })
          .subscribe(
            (res: any) => {
              this.user = res;
              console.log(res);
            },
            (error) => {
              console.error('Erro ao obter dados do utilizador: ', error);
            }
          );
      }
    }
  }

  getUtilizadorId() {
    if (typeof localStorage !== 'undefined') {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        const usertokenParts = accessToken.split('.');
        if (usertokenParts.length === 3) {
          const userdecodedToken = atob(usertokenParts[1]);
          const usertokenInfo = JSON.parse(userdecodedToken);
          return usertokenInfo.id;
        }
      }
    }
    return null;
  }

  logoutuser() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/Authentication/User-Login']);
    }
  }
}
