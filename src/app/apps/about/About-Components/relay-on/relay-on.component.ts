import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relay-on',
  templateUrl: './relay-on.component.html',
  styleUrls: ['./relay-on.component.css']
})
export class RelayOnComponent implements OnInit {

  relayOn = [
    {
      image: '../assets/images/innerpage/parkk.png',
      field: 'Parking room for more than 35 campers',
      fieldText: ''
    },
    {
      image: '../assets/images/innerpage/tentt.png',
      field: 'Tent area along a river',
      fieldText: ''
    },
    {
      image: '../assets/images/innerpage/beachhh.png',
      field: 'Private beach, clean and drinkable water and place for fishing endemic trout',
      fieldText: ''
    }
  ];
  
  relayOn1 = [
    {
      image: '../assets/images/innerpage/coffee.png',
      field: 'Caffe bar with cold local craft beer and traditional drinks',
      fieldText: ''
    },
    {
      image: '../assets/images/innerpage/playgroundd.png',
      field: 'Playground area for kids',
      fieldText: ''
    },
    {
      image: '../assets/images/innerpage/wc.png',
      field: 'Modern sanitar with hot shower',
      fieldText: ''
    }
  ];

  relayOn2 = [
    {
      image: '../assets/images/innerpage/wood.png',
      field: 'Unique accomodation units wooden log cabin',
      fieldText: ''
    },
    {
      image: '../assets/images/innerpage/wifi.png',
      field: 'Wi-Fi area 24/7 free',
      fieldText: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
