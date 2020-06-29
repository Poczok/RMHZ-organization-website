import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public texto = 'Régi Mesterségek Háza Zenta';
  public lat = 45.927564;
  public lng = 20.088132;
  public zoom = 16;
  constructor() { }

  ngOnInit(): void {
  }

}
