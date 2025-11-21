import { Component, OnInit } from '@angular/core';

interface Item {
  type: 'image' | 'video';
  src: string;
  alt: string;
}


@Component({
  selector: 'app-rafting-picture',
  templateUrl: './rafting-picture.component.html',
  styleUrls: ['./rafting-picture.component.css']
})


export class RaftingPictureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data: Item[] = [
    {
      type: 'image',
      src: 'assets/images/innerpage/raftprice.JPG',
      alt: '0'
    },
    {
      type: 'video',
      src: 'assets/videos/hrana.mp4',
      alt: '88'
    },
    {
      type: 'image',
      src: 'assets/images/innerpage/raft4.webp',
      alt: '4'
    },
    {
      type: 'image',
      src: 'assets/images/innerpage/wooden.jpg',
      alt: '24'
    },{
      type: 'image',
      src: 'assets/images/innerpage/hrana.webp',
      alt: '244'
    },
    {
      type: 'image',
      src: 'assets/images/innerpage/noc.webp',
      alt: '246'
    },
    {
      type: 'image',
      src: 'assets/images/innerpage/oldtimer.jpg',
      alt: '247'
    },
    {
      type: 'image',
      src: 'assets/images/innerpage/voda.png',
      alt: '249'
    },
    {
      type: 'image',
      src: 'assets/images/innerpage/raft6.webp',
      alt: '1'
    },
    {
      type: 'image',
      src: 'assets/images/innerpage/raft3.webp',
      alt: '2'
    },
    
    {
      type: 'image',
      src: 'assets/images/innerpage/raft5.webp',
      alt: '3'
    },
    {
      type: 'image',
      src: 'assets/images/innerpage/raft7.webp',
      alt: '3'
    },
    {
      type: 'image',
      src: 'assets/images/innerpage/raft8.webp',
      alt: '3'
    },
    {
      type: 'image',
      src: 'assets/images/innerpage/raft77.jpg',
      alt: '77'
    },
    {
      type: 'image',
      src: 'assets/images/innerpage/raft2.webp',
      alt: '3'
    }
  ]
}