import { Component } from '@angular/core';
declare var $:any;
import "./blogs.js";
@Component({
  selector: 'cm-blogs-page',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsPageComponent {
  title = 'ClubMarriottWebsite';
}
