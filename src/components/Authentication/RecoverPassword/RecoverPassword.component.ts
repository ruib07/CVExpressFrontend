import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-RecoverPassword',
  templateUrl: './RecoverPassword.component.html',
  styleUrls: ['./RecoverPassword.component.css'],
})
export class RecoverPasswordComponent implements OnInit {
  existingEmail: string = '';
  eyeIcon = faEye;
  eyeIconSlash = faEyeSlash;
  visible: boolean = true;
  changetype: boolean = true;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.existingEmail = params['email'];
    });
  }

  viewpassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  showSuccess() {
    this.toastr.success('Password alterada com sucesso!', 'Sucesso', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  showError() {
    this.toastr.error('A Password não foi alterada!', 'Erro', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  SendNewPassword(recoverPassword: {
    newPassword: string;
    confirmPassword: string;
  }) {
    this.http
      .put(
        `http://localhost:5181/RegisterUsers/${this.existingEmail}/updatepassword`,
        recoverPassword
      )
      .subscribe(
        (res) => {
          this.showSuccess();
          this.router.navigate(['/Authentication/User-Login']);
        },
        (error) => {
          this.showError();
        }
      );
  }
}
