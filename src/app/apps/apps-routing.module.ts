import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


import { FullComponent } from './layout/full/full.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryTestComponent } from './gallery-test/gallery-test.component';
import { SuccessfulBookingComponent } from '../successful-booking/successful-booking.component';
import { BookingComponent } from './booking/booking.component';
import { SuccesfulMessageComponent } from '../succesful-message/succesful-message.component';
import { ActivitiesComponent } from './activities/activities.component';
import { RaftingComponent } from './rafting/rafting.component';
import { RaftingPictureComponent } from './rafting-picture/rafting-picture.component';
import { RaftingOfferComponent } from './rafting-offer/rafting-offer.component';
import { RaftingOfferDetailComponent } from './rafting-offer-detail/rafting-offer-detail.component';
import { RaftingDetailComponent } from './rafting-detail/rafting-detail.component';
import { RaftingBbqDetailComponent } from '../rafting-bbq-detail/rafting-bbq-detail.component';
import { RaftingBbqSleepDetailComponent } from '../rafting-bbq-sleep-detail/rafting-bbq-sleep-detail.component';


const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', component: BlogComponent },
      { path: 'blogDetail/:id', component: BlogDetailComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'gallery', component: GalleryTestComponent },
      { path: 'reservation', component: ReservationComponent },
      { path: 'successful-reservation', component: SuccessfulBookingComponent },
      { path: 'booking', component: BookingComponent },
      { path: 'successful-message', component: SuccesfulMessageComponent },
      { path: 'activities', component: ActivitiesComponent },
      { path: 'rafting', component: RaftingPictureComponent },
      { path: 'rafting-offers', component: RaftingOfferComponent },
      { path: 'rafting-detail', component: RaftingDetailComponent},
      { path: 'rafting-bbq-detail', component: RaftingBbqDetailComponent },
      { path: 'rafting-bbq-sleep-detail', component: RaftingBbqSleepDetailComponent },
      { path: 'rafting-offer-detail/:id', component: RaftingOfferDetailComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
