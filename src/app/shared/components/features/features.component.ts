import { Component, OnInit } from '@angular/core';
import { Ifeature } from '../models/features';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  featuresArray : Ifeature[] =[
    {
      heading : 'Fully Layered PSD',
      info : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem facilis asperiores nemo suscipit tempore temporibus earum sapiente laboriosam, itaque eveniet fuga, ullam, ad voluptas a! Fugiat beatae repellat fugism  ',
      icon : ' <i class="fa-regular fa-lemon fa-2x"></i>'
    },
    {
      heading : 'Font Awesome Icons',
      info : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem facilis asperiores nemo suscipit tempore temporibus earum sapiente laboriosam, itaque eveniet fuga, ullam, ad voluptas a! Fugiat beatae repellat fugism  ',
      icon : ' <i class="fa-sharp fa-solid fa-font-awesome fa-2x"></i>'
    },
    {
      heading : 'Fully Responsive',
      info : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem facilis asperiores nemo suscipit tempore temporibus earum sapiente laboriosam, itaque eveniet fuga, ullam, ad voluptas a! Fugiat beatae repellat fugism  ',
      icon : ' <i class="fa-brands fa-amazon fa-2x"></i>'
    },
    {
      heading : 'HTML3 & CSS3',
      info : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem facilis asperiores nemo suscipit tempore temporibus earum sapiente laboriosam, itaque eveniet fuga, ullam, ad voluptas a! Fugiat beatae repellat fugism  ',
      icon : ' <i class="fa-solid fa-code fa-2x"></i>'
    },
    {
      heading : 'Email Template',
      info : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem facilis asperiores nemo suscipit tempore temporibus earum sapiente laboriosam, itaque eveniet fuga, ullam, ad voluptas a! Fugiat beatae repellat fugism  ',
      icon : ' <i class="fa-solid fa-envelope fa-2x"></i>'
    },
    {
      heading : 'Free to download',
      info : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptatem facilis asperiores nemo suscipit tempore temporibus earum sapiente laboriosam, itaque eveniet fuga, ullam, ad voluptas a! Fugiat beatae repellat fugism  ',
      icon : ' <i class="fa-solid fa-file-arrow-down fa-2x"></i>'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
