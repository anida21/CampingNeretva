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

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
