import { Component } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';
import { GooglereviewsComponent } from 'src/app/googlereviews/googlereviews.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  

  constructor(public service:ServiceblogService,
) {
    this.service.showEdit=false;
    
  }
  
}