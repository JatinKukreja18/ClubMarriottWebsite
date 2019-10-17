import { Component } from '@angular/core';
declare var $:any;
import "./faq.js";

@Component({
  selector: 'cm-faq-page',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQPageComponent {
  title = 'ClubMarriottWebsite';
}
