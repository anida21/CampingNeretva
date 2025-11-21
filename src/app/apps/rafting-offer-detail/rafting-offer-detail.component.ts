import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Offer } from '../rafting-offer/offer.model';

@Component({
  selector: 'app-rafting-offer-detail',
  templateUrl: './rafting-offer-detail.component.html',
  styleUrls: ['./rafting-offer-detail.component.css']
})
export class RaftingOfferDetailComponent implements OnInit {

  offer: Offer | undefined;
 

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const offerId = Number(this.route.snapshot.paramMap.get('id'));
  }


}
