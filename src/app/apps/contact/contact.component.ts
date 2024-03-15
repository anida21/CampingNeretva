import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailForm } from 'src/app/reservation/email.model';
import { EmailService } from 'src/app/reservation/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  emailForm: EmailForm = {
    to: 'didamujezin@gmail.com',
    formData: {
      Name: '',
      PhoneNumber: '',
      Email: '',
      TypeOfVehicle: '',
      CheckBox1: false,
      CheckBox2: false,
      NumberOfGuests: '',
      CheckIn: '',
      CheckOut: '',
      Message: '',
      TypeOfCamping: ''
    }
  };

  
constructor(private emailService: EmailService,
  private router: Router) {}

  sendMessage() {
    this.emailService.sendMessage(this.emailForm).subscribe(
      response => {
        console.log('Message sent successfully', response);
        // Nakon uspješnog slanja emaila, preusmjeri korisnika na drugu stranicu
        this.router.navigateByUrl('/successful-message');
      },
      error => {
        console.error('Error sending message:', error);
      }
    );
  }

  isSubmitDisabled(): boolean {
    return (this.emailForm.formData.Name === '' || this.emailForm.formData.Email === '');
  }


}
