import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $("span.menu").click(function () {
      $("ul.nav1").slideToggle(300, function () {
        // Animation complete.
      });
    });
 
 
  }


}
