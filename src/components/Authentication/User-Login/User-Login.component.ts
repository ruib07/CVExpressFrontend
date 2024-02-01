import { HttpClient } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-User-Login',
  templateUrl: './User-Login.component.html',
  styleUrls: ['./User-Login.component.css'],
})
export class UserLoginComponent {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private el: ElementRef
  ) {}

  eyeIcon = faEye;
  eyeIconSlash = faEyeSlash;
  visible: boolean = true;
  changetype: boolean = true;

  showSuccess() {
    this.toastr.success('Login Efetuado com sucesso!', 'Sucesso', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  showError() {
    this.toastr.error('Login não foi efetuado!', 'Erro', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  viewpassworduser() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  LoginUsers(loginusers: { email: string; password: string }) {
    this.http
      .post('http://localhost:5181/userlogin', loginusers, {
        observe: 'response',
      })
      .subscribe(
        (res: any) => {
          const accessToken = res.body.accessToken;
          if (accessToken) {
            localStorage.setItem('accessToken', accessToken);
            this.showSuccess();
            this.router.navigate(['/UserProfile/User-EditInfo']);
          }
        },
        (error) => {
          this.showError();
        }
      );
  }
}
