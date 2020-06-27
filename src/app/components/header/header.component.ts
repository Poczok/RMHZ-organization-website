import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public mobileView: boolean;
  selectedItem = window.location.pathname;
  constructor(private _router: Router, public translate: TranslateService) { }

  ngOnInit(): void {
    this.mobileView = window?.innerWidth < 700 ? true : false;
    console.log(this.mobileView);
    this.translate.addLangs(['en', 'hu', 'sr']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/hu|sr/) ? browserLang : 'en');
  }
  public navigate(path: string) {
    this.selectedItem = path;
  }
}
