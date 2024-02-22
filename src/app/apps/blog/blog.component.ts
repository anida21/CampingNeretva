import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
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

  videoSource = 'assets/images/innerpage/Camping Neretva.mp4';


  constructor(
    public service: ServiceblogService,
    public router: Router,
    public http: HttpClient,
    private renderer: Renderer2
  ) {
    this.service.showEdit = false;
  }

  ngOnInit(): void {
    this.checkScreenSize();
    if (this.service.Blogs.length === 0)
      this.service.getBlog().subscribe((d: any) => (this.service.Blogs = d));

    // Učitajte YouTube API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // Callback funkcija nakon učitavanja YouTube API
    (window as any).onYouTubeIframeAPIReady = () => {
      // Kreirajte YouTube igrača
      const player = new (window as any).YT.Player('youtube-player', {
        videoId: '09pfnX0seH8', // Zamijenite sa svojim video ID
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      rel: 0,
      mute: 1,
      modestbranding: 1, // Dodajte ovu liniju za uklanjanje YouTube loga
      iv_load_policy: 3, // Dodajte ovu liniju za isključivanje anotacija
    },
    events: {
      onReady: (event: any) => {
        event.target.playVideo(); // Pokrenite video kada je spreman
      },
      onStateChange: (event: any) => {
        if (event.data === (window as any).YT.PlayerState.ENDED) {
          event.target.playVideo(); // Ponovno pokrenite video kada završi
            }
          }
        }
      });
    };
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    // Provjeri veličinu ekrana kada se prozor promijeni veličinu
    this.checkScreenSize();
  }

  private checkScreenSize(): void {
    const video = this.renderer.selectRootElement('#myVideo');

    // Postavi autoplay na true samo ako je širina ekrana manja od 768 piksela
    video.autoplay = window.innerWidth < 768;
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
