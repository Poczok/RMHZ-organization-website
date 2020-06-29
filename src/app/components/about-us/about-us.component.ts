import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  // TODO resolution service needed (every component needs to know is it in mobile view or not)
  constructor() { }

  ngOnInit(): void {
  }

}
