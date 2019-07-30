import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/compiler/src/core';

@Component({
  selector: 'cm-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  // encapsulation: ViewEncapsulation.Native

})
export class NavigationComponent {
  title = 'ClubMarriottWebsite';
}
