import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rafting-offer',
  templateUrl: './rafting-offer.component.html',
  styleUrls: ['./rafting-offer.component.css']
})
export class RaftingOfferComponent implements OnInit {

  constructor(private router: Router) { }

  offers = [
    {
      title: "RAFTING",
      duration: "Duration: 5 hours",
      price: "€25",
      availability: "Available: May-September",
      image: "assets/images/innerpage/raft9.webp",
    },
    {
      title: "RAFTING + OVERNIGHT STAY",
      duration: "Duration: 5 hours",
      price: "€50",
      availability: "Available : May-September",
      image: "assets/images/innerpage/raft3.webp"
    },
    {
      title: "RAFTING + OVERNIGHT STAY + MEALS",
      duration: "Duration: 5 hours",
      price: "€50",
      availability: "Available: May-September",
      image: "assets/images/innerpage/raft7.webp"
    }
  ];

  ngOnInit(): void {
  }

  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  showDetails(event: Event) {
    event.preventDefault();
    this.router.navigate(['/rafting-detail']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
