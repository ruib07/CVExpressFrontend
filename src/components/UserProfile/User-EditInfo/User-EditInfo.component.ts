import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-User-EditInfo',
  templateUrl: './User-EditInfo.component.html',
  styleUrls: ['./User-EditInfo.component.css'],
})
export class UserEditInfoComponent implements OnInit {
  user: any = {};
  eyeIcon = faEye;
  eyeIconSlash = faEyeSlash;
  visible: boolean = true;
  changetype: boolean = true;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  ngOnInit() {
    this.getUser();
  }

  viewpassword() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  showSuccess() {
    this.toastr.success('Dados atualizados com sucesso!', 'Sucesso', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  showError() {
    this.toastr.error('Erro a atualizar os dados', 'Erro', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  getUser() {
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

  updateUserInfo(updateResponsible: {
    flname: string;
    phone: number;
    email: string;
    password: string;
    image: string;
  }) {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      const headers = new HttpHeaders().set(
        'Authorization',
        `Bearer ${accessToken}`
      );

      this.http
        .put(
          `http://localhost:3005/restaurantresponsibles/${this.getUtilizadorId()}`,
          updateResponsible,
          { headers }
        )
        .subscribe(
          (res: any) => {
            this.showSuccess();

            setTimeout(() => {
              window.location.reload();
            }, 3000);
          },
          (error) => {
            this.showError();
          }
        );
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
}
