import { Component, Input, OnInit } from '@angular/core';
import { 
  animate, 
  style, 
  transition,
  trigger,
  AnimationEvent
} from '@angular/animations';

interface Item {
  src: string; // Renamed for general use
  alt: string;
  type: 'image' | 'video'; // Added type property
}

@Component({
  selector: 'app-rafting',
  templateUrl: './rafting.component.html',
  styleUrls: ['./rafting.component.css'],
  animations: [
    trigger('animation', [
      transition('void => visible', [
        style({transform: 'scale(0.5)'}),
        animate('150ms', style({transform: 'scale(1)'}))
      ]),
      transition('visible => void', [
        style({transform: 'scale(1)'}),
        animate('150ms', style({transform: 'scale(0.5)'}))
      ]),
    ]),
    trigger('animation2', [
      transition(':leave', [
        style({opacity: 1}),
        animate('50ms', style({opacity: 0.8}))
      ])
    ])
  ]
})
export class RaftingComponent implements OnInit {
  @Input() galleryData: Item[] = [];
  @Input() showCount = false;

  previewImage = false;
  showMask = false;
  previewVideo = false; // Added for video preview
  currentLightboxItem: Item = this.galleryData[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  constructor() { }

  ngOnInit(): void {
    this.totalImageCount = this.galleryData.length;
  }

  onPreviewImage(index: number): void {
    this.showMask = true;
    const item = this.galleryData[index];
    this.previewImage = item.type === 'image';
    this.previewVideo = item.type === 'video';
    this.currentIndex = index;
    this.currentLightboxItem = item;
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'void') {
      this.showMask = false;
    }
  }

  onClosePreview() {
    this.previewImage = false;
    this.previewVideo = false;
  }

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.galleryData.length;
    this.currentLightboxItem = this.galleryData[this.currentIndex];
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.galleryData.length) % this.galleryData.length;
    this.currentLightboxItem = this.galleryData[this.currentIndex];
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  offers = [
    {
      title: "Basic Mostar city tour 8 bridges",
      duration: "Duration: 5 hours",
      price: "Price: €35",
      availability: "Available: March-November",
      image: "assets/images/innerpage/bridge.png",
      link: "/rafting-detail"
    },
    {
      title: "Mostar city tour 8 bridges + BBQ",
      duration: "Duration: 5 hours",
      price: "Price: €45",
      availability: "Available: March-November",
      image: "assets/images/innerpage/bridge1.png",
      link: "/rafting-bbq-detail"
    },
    {
      title: "Mostar city tour 8 bridges + BBQ + sleeping",
      duration: "Duration: 2 days",
      price: "Price: €60",
      availability: "Available: March-November",
      image: "assets/images/innerpage/wooden1.png",
      link: "/rafting-bbq-sleep-detail"
    }
  ];


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
