import { Component, OnInit, Input } from '@angular/core';

export interface Slide {
  imgSrc: string;
  imgAlt: string;
  caption: string;
}

@Component({
  selector: 'app-touch-slider',
  templateUrl: './touch-slider.component.html',
  styleUrls: ['./touch-slider.component.css']
})
export class TouchSliderComponent implements OnInit {

  constructor() { }

  showPrev(i: number) {
    if (i > 0) {
      this.selectedIndex = i - 1;
    } else {
      this.selectedIndex = this.images.length - 1; // Ako je trenutni indeks 0, postavite ga na poslednji
    }
  }

  showNext(i: number) {
    if (i < this.images?.length - 1) {
      this.selectedIndex = i + 1;
    } else {
      this.selectedIndex = 0; // Ako je trenutni indeks poslednji, postavite ga na prvi
    }
  } 
  ngOnInit() {
    // Postavite interval za automatsko listanje svakih nekoliko sekundi
    setInterval(() => {
      this.showNext(this.selectedIndex); // Prosljeđivanje trenutnog indeksa
    }, 2000); // Podešavanje vremena u milisekundama (ovde 5000 ms = 5 sekundi)
  }

  @Input() images: Slide[] = [];

  selectedIndex = 0;



}
