import { Component, OnInit } from '@angular/core';
import { Iicons } from '../models/features';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  iconsArray: Iicons[] = [
    { icon :  '<i class="fa-brands fa-square fa-square-facebook fa-2x"></i>',
    link : 'javascript:;'
   },{
    icon :'<i class="fa-brands fa-square-twitter fa-2x"></i>',
    link : 'javascript:;'
   },
   {
    icon : '<i class="fa-brands fa-square fa-google-plus fa-2x"></i>',
    link : 'javascript:;'
   },
   {
    icon : '<i class="fa-brands fa-square fa-pinterest fa-2x"></i>',
    link : 'javascript:;'
   } 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
