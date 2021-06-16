import { Component } from '@angular/core';
declare var $:any;
import "./howto.js";

@Component({
  selector: 'cm-howto-page',
  templateUrl: './howto.component.html',
  styleUrls: ['./howto.component.css']
})
export class howToComponent {
  title = 'ClubMarriottWebsite';
}
