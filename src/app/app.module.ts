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
import { GalleryLightboxComponent } from './gallery-lightbox/gallery-lightbox.component';
import { GalleryTestComponent } from './gallery-test/gallery-test.component';
import { SuccessfulBookingComponent } from './successful-booking/successful-booking.component';



@NgModule({
  declarations: [
    AppComponent,
    ScrollToFooterDirective,
    ReservationComponent,
    ContactComponent,
    GalleryLightboxComponent,
    GalleryTestComponent,
    SuccessfulBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    HammerModule,
    BrowserAnimationsModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
