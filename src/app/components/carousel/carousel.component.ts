import { Component ,ViewEncapsulation, Input } from '@angular/core';
declare var $:any;
import "./carousel.js";
@Component({
  selector: 'cm-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarouselComponent {
  @Input() hasSlant;
}
