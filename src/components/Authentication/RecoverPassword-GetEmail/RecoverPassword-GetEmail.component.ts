import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-RecoverPassword-GetEmail',
  templateUrl: './RecoverPassword-GetEmail.component.html',
  styleUrls: ['./RecoverPassword-GetEmail.component.css'],
})
export class RecoverPasswordGetEmailComponent {
  existingEmail: string = '';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  showSuccess() {
    this.toastr.success('Email confirmado com sucesso!', 'Sucesso', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  showError() {
    this.toastr.error('O Email não existe!', 'Erro', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  GetEmail() {
    this.http
      .get(`http://localhost:5181/RegisterUsers/getemail/${this.existingEmail}`)
      .subscribe(
        (res: any) => {
          this.showSuccess();
          this.router.navigate(
            [`/Authentication/${this.existingEmail}/RecoverPassword`],
            {
              queryParams: { email: this.existingEmail },
            }
          );
        },
        (error) => {
          this.showError();
        }
      );
  }
}
