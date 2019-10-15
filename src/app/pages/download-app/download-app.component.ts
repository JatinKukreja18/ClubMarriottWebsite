import { Component, OnInit } from '@angular/core';
import * as AOS from '../../../vendor/aos-master/dist/aos.js';
declare var $:any;
// import "./scroll.js";
@Component({
  selector: 'cm-download-app',
  templateUrl: './download-app.component.html',
  styleUrls: ['./download-app.component.css']
})
export class DownloadAppPageComponent implements OnInit {
  title = 'ClubMarriottWebsite';
  ngOnInit() {
    AOS.init();
  }
}
