import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
onWindowScroll() {
  const yOffset = window.pageYOffset;
  const scrollThreshold = 200; // Promenite ovu vrednost prema potrebi
  const scrollToTopButton = document.querySelector('.bt-top');

  if (scrollToTopButton) {
    if (yOffset > scrollThreshold) {
      scrollToTopButton.classList.add('show');
    } else {
      scrollToTopButton.classList.remove('show');
    }
  }
}

scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  
}
