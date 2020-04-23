import { Component, Input } from '@angular/core';
declare var $:any;
import "./teasers-list.js";
@Component({
  selector: 'cm-teasers-list',
  templateUrl: './teasers-list.component.html',
  styleUrls: ['./teasers-list.component.css']
})
export class TeasersListComponent {
  @Input() shape;
}
