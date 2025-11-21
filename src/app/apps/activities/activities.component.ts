import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDetails(event: Event) {
    event.preventDefault();
    this.router.navigate(['/rafting']);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
