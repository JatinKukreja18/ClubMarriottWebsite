import { Component, Input } from '@angular/core';
declare var $:any;
@Component({
  selector: 'cm-card-list-section',
  templateUrl: './card-list-section.component.html',
  styleUrls: ['./card-list-section.component.css']
})
export class CardListSectionComponent {
  @Input() slides;
}
