import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-User-Register',
  templateUrl: './User-Register.component.html',
  styleUrls: ['./User-Register.component.css'],
})
export class UserRegisterComponent {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  eyeIcon = faEye;
  eyeIconSlash = faEyeSlash;
  visible: boolean = true;
  changetype: boolean = true;

  showSuccess() {
    this.toastr.success('Registo Efetuado com sucesso!', 'Sucesso', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  showError() {
    this.toastr.error('Registo não foi efetuado!', 'Erro', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  viewpasswordregister() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  RegisterUsers(registerusers: {
    fullname: string;
    email: string;
    password: string;
    birthdate: string;
    location: string;
    country: string;
    nationality: string;
    phonenumber: number;
  }) {
    this.http
      .post('http://localhost:5181/RegisterUsers', registerusers)
      .subscribe(
        (res: any) => {
          const userDataForUsersTable = {
            fullname: registerusers.fullname,
            email: registerusers.email,
            password: registerusers.password,
            birthdate: registerusers.birthdate,
            location: registerusers.location,
            country: registerusers.country,
            nationality: registerusers.nationality,
            phonenumber: registerusers.phonenumber,
            registeruser_id: res.id,
          };

          this.http
            .post('http://localhost:5181/Users', userDataForUsersTable)
            .subscribe((userRes) => {
              this.showSuccess();
              this.router.navigate(['/Authentication/User-Login/']);
            });
        },
        (error) => {
          this.showError();
        }
      );
  }
}
