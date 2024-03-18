import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbCollapseModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppsRoutingModule } from './apps-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppsComponent } from './apps.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

import { ServiceblogService } from './blog/blog-service.service';
import { RelayOnComponent } from './about/About-Components/relay-on/relay-on.component';
import { TopContentComponent } from './about/About-Components/top-content/top-content.component';

import { FullComponent } from './layout/full/full.component';

import { BannerComponent } from './shared/banner/banner.component';
import { BannerNavigationComponent } from './shared/banner-navigation/banner-navigation.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VideoComponent } from '../video/video.component';
import { TouchSliderComponent } from '../touch-slider/touch-slider.component';
import { HammerModule } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BookingComponent } from './booking/booking.component';
import { ActivitiesComponent } from './activities/activities.component';



@NgModule({
  declarations: [
    AppsComponent,
    VideoComponent,
    TouchSliderComponent,
    BlogComponent,
    AboutComponent,
    BlogDetailComponent,
    RelayOnComponent,
    TopContentComponent,
    FullComponent,
    BannerComponent,
    // BannerContentComponent,
    BannerNavigationComponent,
    FooterComponent,
    BookingComponent,
    ActivitiesComponent
    
  ],
  imports: [
    CommonModule,
    AppsRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HammerModule,
    NgbCollapseModule  ],
  providers: [ServiceblogService, BsModalService],
})
export class AppsModule {}
