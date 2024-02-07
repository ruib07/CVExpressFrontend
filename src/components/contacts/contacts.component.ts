import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent {
  constructor(private toastr: ToastrService, private http: HttpClient) {}

  showSuccess() {
    this.toastr.success('Contacto enviado com sucesso!', 'Sucesso', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  showError() {
    this.toastr.error('Erro a enviar o contacto', 'Erro', {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-bottom-right',
      timeOut: 5000,
    });
  }

  SendContact(contactForm: {
    fullName: string;
    email: string;
    phoneNumber: number;
    subject: string;
    message: string;
  }) {
    this.http.post('http://localhost:5181/Contacts', contactForm).subscribe(
      (res: any) => {
        this.showSuccess();

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      },
      (error) => {
        console.error(error);
        this.showError();
      }
    );
  }
}
