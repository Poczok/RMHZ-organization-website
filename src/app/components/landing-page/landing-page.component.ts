import { Component, OnInit } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  public mobileView: boolean;
  /* A logóhoz szükséges lesz felvenni egy szöveget, hogy az oldal megvalósulása a BGA/Kormánynak
   * köszönhető */


  constructor(private _resolutionService: ResolutionService) { }

  ngOnInit(): void {
    this.mobileView = this._resolutionService.isMobile();
  }

}
