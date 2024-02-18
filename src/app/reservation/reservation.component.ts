
import emailjs from '@emailjs/browser';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MailChimpService } from '../mail-chimp.service';
import { EmailForm } from './email.model';
import { EmailService } from './email.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  // ... postojeća polja

  
  Name: string = '';
  PhoneNumber: string = '';
  Email: string = '';
  TypeOfVehicle: string = '';
  CheckBox1: boolean = false;
  CheckBox2: boolean = false;
  NumberOfGuests: string = '';
  CheckIn: string = '';
  CheckOut: string = '';
  Message: string = '';
  
  constructor(private emailService: EmailService) {}

  saveEmail(): void {
    const emailForm: EmailForm = {
      Name: this.Name,
      PhoneNumber: this.PhoneNumber,
      Email: this.Email,
      TypeOfVehicle: this.TypeOfVehicle,
      CheckBox1: this.CheckBox1,
      CheckBox2: this.CheckBox2,
      NumberOfGuests: this.NumberOfGuests,
      CheckIn: this.CheckIn,
      CheckOut: this.CheckOut,
      Message: this.Message,
    };
  

    console.log(emailForm);
    this.emailService.sendEmail(emailForm).subscribe(
      
      (response) => {
        console.log('Email sent successfully:', response);
        // Dodajte kod za obradu uspešnog slanja emaila
      },
      (error) => {
        console.error('Error sending email:', error);
        // Dodajte kod za obradu greške pri slanju emaila
      }
    );
  }
  
}
 /**  url: string = "https://formsubmit.io/send/anida.mujezin@outlook.com"; // 

  submitForm() {
    const message = `Thanks! Your message has been sent to katie.m.tantillo@gmail.com. Look for a reply to within 24 hours.`;
  }

  Name:string='';
  PhoneNumber:string='';
  Email:string='';
  TypeOfVehicle:string='';
  CheckBox1: boolean = false;
  CheckBox2: boolean = false;
  CheckBox3: boolean = false;
  NumberOfGuests: string = '';
  CheckIn: string = '';
  CheckOut: string = '';
  Message: string = '';

  constructor(private mailChimpService: MailChimpService){

  }

  saveEmail(){

    let bodyMailChimp = {
      email_address: this.Email,
      status: "subscribed",
        Name:this.Name,
        PhoneNumber:this.PhoneNumber,
        TypeOfVehicle:this.TypeOfVehicle,
        CheckBox1:this.CheckBox1,
        CheckBox2:this.CheckBox2,
        CheckBox3:this.CheckBox3,
        NumberOfGuests:this.NumberOfGuests,
        CheckIn:this.CheckIn,
        CheckOut:this.CheckOut,
        Message:this.Message
      
    }
    this.mailChimpService.addEmail(bodyMailChimp).subscribe();
  }
  */
 /**  form: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicijalizacija forme u konstruktoru
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Postavljanje logike za slanje forme
      console.log('Form submitted:', this.form.value);
    }
  }
}
  /**form: FormGroup = this.fb.group ({
    from_name: '',
    to_name: 'Admin',
    subject: '',
    from_email: '',
    arrival_date: '',
    departure_date: '',
    message: '',
    
  });

  constructor(private fb: FormBuilder) {}

  async send() {
    emailjs.init('lIVFXNiUQ-D2nddgq');
    let response = await emailjs.send("service_olaksgf","template_qihi6q8" , {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      subject: this.form.value.subject,
      from_email: this.form.value.from_email,
      arrival_date: this.form.value.arrival_date,
      departure_date: this.form.value.departure_date,
      message: this.form.value.message,
    });

    alert('Message has been sent.');
    this.form.reset();
  }
  **/
