import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public mobileView: boolean;
  constructor(private _titleService: Title, private _translateService: TranslateService) {}

  ngOnInit(): void {
    this.mobileView = window?.innerWidth < 700 ? true : false;
    this._translateService.onLangChange.subscribe(() => {
      this._titleService.setTitle(this._translateService.instant('TITLE'));
  });
    const browserLang = this._translateService?.getBrowserLang();
    this._translateService.use(browserLang?.match(/hu|sr/) ? browserLang : 'en');
  }
}
