import { Component, OnInit } from '@angular/core';
import { Offer } from '../rafting-offer/offer.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EmailForm } from 'src/app/reservation/email.model';
import { EmailService } from 'src/app/reservation/email.service';

@Component({
  selector: 'app-rafting-detail',
  templateUrl: './rafting-detail.component.html',
  styleUrls: ['./rafting-detail.component.css']
})
export class RaftingDetailComponent implements OnInit {
  emailForm: EmailForm = {
    to: 'neretvac@gmail.com',
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
      TypeOfCamping: '',
      TypeOfRafting: ''
    }
  };
  missingFields: boolean = false;
someValue: any;
  

  constructor(private route: ActivatedRoute,
    private emailService: EmailService,
    private router: Router) {}

  ngOnInit() {
    const offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.checkFields();
    window.scrollTo(0, 0);
  }


  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  sendReservationEmail() {
    this.emailService.sendRaftReservation(this.emailForm).subscribe(
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
    return (this.emailForm.formData.Name === '' 
    || this.emailForm.formData.Email === '' 
    || this.emailForm.formData.PhoneNumber === ''
    || this.emailForm.formData.NumberOfGuests === '');
  }
  

  checkFields(): void {
    this.missingFields = !(
      this.emailForm.formData.Name &&
      this.emailForm.formData.PhoneNumber &&
      this.emailForm.formData.Email &&
      this.emailForm.formData.NumberOfGuests
    );
  }
  
 
  ngAfterViewInit() {
    // Dodajte scroll event listener nakon što je komponenta učitana
    const video = document.querySelector('video') as HTMLVideoElement;
  if (video) {
    video.muted = true;
    video.play().catch(error => {
      console.error("Video autoplay error:", error);
    });
  }

  window.addEventListener('scroll', this.onScroll.bind(this));
    }

  // Funkcija koja se poziva na svaki scroll događaj
  onScroll() {
    const video = document.querySelector('video');
    if (video) {
      const rect = video.getBoundingClientRect();
      
      // Provjerava je li video unutar vidljivog područja prozora
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        if (video.paused) {
          video.play().catch(function(error) {
            console.error("Video autoplay error:", error);
          });
        }
      }
    }
  }

  // Preporučuje se ukloniti event listener kada komponenta bude uništena
  ngOnDestroy() {
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }
}

