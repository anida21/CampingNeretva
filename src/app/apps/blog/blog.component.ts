import { Component, OnInit } from '@angular/core';
import { Blog } from './blog-type';
import { ServiceblogService } from './blog-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogsDetail: Blog[] = [];

  constructor(
    public service: ServiceblogService,
    public router: Router,
    public http: HttpClient
  ) {
    this.service.showEdit = false;
  }

  ngOnInit(): void {
    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe((d: any) => (this.service.Blogs = d));
  }

  loginClick() {
    this.router.navigate(['/login']);
  }

  newPost() {
    this.router.navigate(['/post']);
  }

  viewDetail(id: number) {
    this.service.detailId = id;

    if (this.service.loginStatusService) this.service.showEdit = true;

    this.router.navigate(['/blogDetail', id]);
  }

  images = [
    {
      imgSrc: '../assets/images/innerpage/faft.jpg',
      imgAlt: 'Image 1',
      caption: 'Raft tours' 
    },
    {
      imgSrc: '../assets/images/innerpage/oldbridge.jpg',
      imgAlt: 'Image 2',
      caption: 'Discover the Charms of Mostar'
    },
    {
      imgSrc: '../assets/images/innerpage/quad.jpg',
      imgAlt: 'Image 3',
      caption: 'Quad biking or renting cross motorcycles'
    },
    {
      imgSrc: '../assets/images/innerpage/mountain.jpg',
      imgAlt: 'Image 3',
      caption: 'Explore the surrounding mountainous areas'
    },
    {
      imgSrc: '../assets/images/innerpage/campcamp.jpg',
      imgAlt: 'Image 3',
      caption: 'The most beautiful sunsets'
    },
    {
      imgSrc: '../assets/images/innerpage/wooden.jpg',
      imgAlt: 'Image 2',
      caption: 'Unique accomodation units wooden log cabin'
    },
    {
      imgSrc: '../assets/images/innerpage/vine.jpg',
      imgAlt: 'Image 3',
      caption: 'Try the Local Wines and Beers'
    },
    {
      imgSrc: '../assets/images/innerpage/tentbeach.jpg',
      imgAlt: 'Image 3',
      caption: 'Tent area'
    },
    {
      imgSrc: '../assets/images/innerpage/enjoy.jpg',
      imgAlt: 'Image 4',
      caption: 'Enjoy the Evening Atmosphere'
    },
    {
      imgSrc: '../assets/images/innerpage/nature.jpg',
      imgAlt: 'Image 4',
      caption: '40 parking places'
    },
    {
      imgSrc: '../assets/images/innerpage/old.jpg',
      imgAlt: 'Image 4',
      caption: ''
    },
    {
      imgSrc: '../assets/images/innerpage/sun.jpg',
      imgAlt: 'Image 2',
      caption: ''
    }
  ]
}
