import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public mobileView: boolean;

  ngOnInit(): void {
    this.mobileView = window?.innerWidth < 700 ? true : false;
  }
}
