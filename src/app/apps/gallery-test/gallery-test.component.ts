import { Component, OnInit } from '@angular/core';

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery-test',
  templateUrl: './gallery-test.component.html',
  styleUrls: ['./gallery-test.component.css']
})
export class GalleryTestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data: Item[] = [
    {
      imageSrc: 'assets/images/innerpage/camp.jpg',
      imageAlt: '1'
    },
    {
      imageSrc: 'assets/images/innerpage/campcamp.jpg',
      imageAlt: '2'
    },
    {
      imageSrc: 'assets/images/innerpage/campparking.jpg',
      imageAlt: '3'
    },
    {
      imageSrc: 'assets/images/innerpage/nature1.jpg',
      imageAlt: '6'
    },
    {
      imageSrc: 'assets/images/innerpage/campraft.webp',
      imageAlt: '6'
    },
    {
      imageSrc: 'assets/images/innerpage/night1.jpg',
      imageAlt: '7'
    },
    {
      imageSrc: 'assets/images/innerpage/old.jpg',
      imageAlt: '8'
    },
    {
      imageSrc: 'assets/images/innerpage/oldtimer.jpg',
      imageAlt: '9'
    },
    {
      imageSrc: 'assets/images/innerpage/quad.jpg',
      imageAlt: '10'
    },
    {
      imageSrc: 'assets/images/innerpage/places.webp',
      imageAlt: '11'
    },
    {
      imageSrc: 'assets/images/innerpage/tentbeach.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/images/innerpage/wooden.jpg',
      imageAlt: '12'
    }
    ,
    {
      imageSrc: 'assets/images/innerpage/camp2.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/images/innerpage/view.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/images/innerpage/bar.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/images/innerpage/enjoy.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/images/innerpage/ulaz.webp',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/images/innerpage/place.webp',
      imageAlt: '12'
    }
    ,
    {
      imageSrc: 'assets/images/innerpage/car.webp',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/images/innerpage/carr.jpg',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/images/innerpage/dronedrone.webp',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/images/innerpage/drone2.webp',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/images/innerpage/car2.webp',
      imageAlt: '12'
    },
    {
      imageSrc: 'assets/images/innerpage/sunsun.jpg',
      imageAlt: '12'
    }
  ]
}
