import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  public mobileView: boolean;
  selectedItem = window.location.pathname;
  constructor(private _router: Router, public translate: TranslateService) { }

  ngOnInit(): void {}
  public navigate(path: string) {
    this.selectedItem = path;
  }
}
