import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollToFooterDirective } from './scroll-to-footer.directive';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './apps/contact/contact.component';
import { GalleryLightboxComponent } from './apps/gallery-lightbox/gallery-lightbox.component';
import { GalleryTestComponent } from './apps/gallery-test/gallery-test.component';
import { SuccessfulBookingComponent } from './successful-booking/successful-booking.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SuccesfulMessageComponent } from './succesful-message/succesful-message.component';
import { RaftingComponent } from './apps/rafting/rafting.component';
import { RaftingPictureComponent } from './apps/rafting-picture/rafting-picture.component';
import { RaftingOfferComponent } from './apps/rafting-offer/rafting-offer.component';
import { FooterComponent } from './apps/shared/footer/footer.component';
import { RaftingOfferDetailComponent } from './apps/rafting-offer-detail/rafting-offer-detail.component';
import { AppsComponent } from './apps/apps.component';
import { RaftingDetailComponent } from './apps/rafting-detail/rafting-detail.component';
import { RaftingBbqDetailComponent } from './rafting-bbq-detail/rafting-bbq-detail.component';
import { RaftingBbqSleepDetailComponent } from './rafting-bbq-sleep-detail/rafting-bbq-sleep-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ScrollToFooterDirective,
    ReservationComponent,
    ContactComponent,
    GalleryLightboxComponent,
    GalleryTestComponent,
    SuccessfulBookingComponent,
    SuccesfulMessageComponent,
    RaftingComponent,
    RaftingPictureComponent,
    RaftingOfferComponent,
    RaftingOfferDetailComponent,
    RaftingDetailComponent,
    RaftingBbqDetailComponent,
    RaftingBbqSleepDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    HammerModule,
    BrowserAnimationsModule,
    NgbCollapseModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
