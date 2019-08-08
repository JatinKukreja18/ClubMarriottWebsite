import { Component } from '@angular/core';
declare var $:any;
// import "../../../vendor/jquery-ui-1.12.1.autocomplete/jquery-ui.min.js";
import './autocomplete.js';
@Component({
  selector: 'cm-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {
  title = 'ClubMarriottWebsite';

}
