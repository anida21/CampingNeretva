import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailForm } from 'src/app/reservation/email.model';
import { EmailService } from 'src/app/reservation/email.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent 
{emailForm: EmailForm = {
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

  sendReservationEmail() {
    this.emailService.sendEmail(this.emailForm).subscribe(
      response => {
        console.log('Email sent successfully', response);
        // Nakon uspješnog slanja emaila, preusmjeri korisnika na drugu stranicu
        this.router.navigateByUrl('/successful-reservation');
      },
      error => {
        console.error('Error sending email:', error);
      }
    );
  }
  

updateTypeOfCamping(event: any): void {
  this.emailForm.formData.TypeOfCamping = event.target.value;
}


dateError: boolean = false;

  checkDates() {
    const checkInDate = new Date(this.emailForm.formData.CheckIn);
    const checkOutDate = new Date(this.emailForm.formData.CheckOut);

    // Provjera jesu li datumi ispravni
    if (checkInDate > checkOutDate) {
      this.dateError = true;
    } else {
      this.dateError = false;
    }
  }


  isSubmitDisabled(): boolean {
    return (this.emailForm.formData.Name === '' || this.emailForm.formData.Email === '' || this.emailForm.formData.PhoneNumber === '');
  }

}