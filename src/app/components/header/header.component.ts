import { Component } from '@angular/core';
declare var $:any;
import './header.js';
@Component({
  selector: 'cm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'ClubMarriottWebsite';

}
function toggleHamburger() {
  document.querySelector('.cm-header-hamburger-link').classList.toggle('opened');
  document.querySelector('.cm-header-hamburger').classList.toggle('opened');
}
