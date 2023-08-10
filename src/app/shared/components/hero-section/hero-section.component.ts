import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  iconsArray : string[] = ['<i class="fa-brands fa-apple fa-3x"></i>','<i class="fa-brands fa-android fa-3x"></i>','<i class="fa-brands fa-windows fa- fa-3x"></i>']
  constructor() { }

  ngOnInit(): void {
  }

}
