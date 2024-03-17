import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailForm } from 'src/app/reservation/email.model';
import { EmailService } from 'src/app/reservation/email.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    
constructor(private emailService: EmailService,
  private router: Router,
  private meta: Meta) {}


  ngOnInit(): void {
    this.meta.addTags([
      { name: 'description', content: 'Description of the contact page' },
      { name: 'keywords', content: 'contact, camping neretva, location, phone, email' },
      { property: 'og:title', content: 'Contact | Camping Neretva' },
      { property: 'og:description', content: 'Contact information for Camping Neretva' },
      { property: 'og:image', content: 'assets/images/innerpage/naturee.jpg' },
      { property: 'og:url', content: 'https://www.campingneretva.com/contact' },
      { name: 'twitter:title', content: 'Contact | Camping Neretva' },
      { name: 'twitter:description', content: 'Contact information for Camping Neretva' },
      { name: 'twitter:image', content: 'assets/images/innerpage/naturee.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ]);
  }


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
