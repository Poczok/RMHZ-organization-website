import { Component, OnInit } from '@angular/core';
import { ResolutionService } from 'src/app/services/resolution.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public mobileView: boolean;
  public texto = 'Régi Mesterségek Háza Zenta';
  public lat = 45.927564;
  public lng = 20.088132;
  public zoom = 16;
  constructor(private _resolutionService: ResolutionService) { }

  ngOnInit(): void {
    this.mobileView = this._resolutionService.isMobile();
  }

}
