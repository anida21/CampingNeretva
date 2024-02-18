import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';


import { FullComponent } from './layout/full/full.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryLightboxComponent } from '../gallery-lightbox/gallery-lightbox.component';
import { GalleryTestComponent } from '../gallery-test/gallery-test.component';


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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule { }
