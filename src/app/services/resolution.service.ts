import { Injectable } from '@angular/core';

@Injectable()
export class ResolutionService {
  private _mobileView: boolean;

  constructor() { }

  setResolution(resolution: number) {
    this._mobileView = resolution < 700 ? true : false;
  }

  isMobile() {
    return this._mobileView;
  }
}
