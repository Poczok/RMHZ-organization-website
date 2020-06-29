import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { ResolutionService } from './services/resolution.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public mobileView: boolean;
  constructor(private _titleService: Title, private _translateService: TranslateService,
    private _resolutionService: ResolutionService) {}

  ngOnInit(): void {
    const screenWidth = window?.innerWidth;
    this._resolutionService.setResolution(screenWidth);
    this.mobileView = this._resolutionService.isMobile();
    this._translateService.onLangChange.subscribe(() => {
      this._titleService.setTitle(this._translateService.instant('TITLE'));
  });
    const browserLang = this._translateService?.getBrowserLang();
    this._translateService.use(browserLang?.match(/hu|sr/) ? browserLang : 'en');
  }
}
