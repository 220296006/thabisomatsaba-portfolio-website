import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-portfolio-details-pharmacyapp',
  templateUrl: './pharmacyapp.component.html',
  styleUrls: ['./pharmacyapp.component.scss']
})
export class PharmacyappComponent implements OnInit, AfterViewInit {
 
  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper('.portfolio-details-slider swiper', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  }

  ngOnInit(): void {
    // Your component initialization code here
  }
}
