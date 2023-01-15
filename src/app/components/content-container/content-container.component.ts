import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { StatusText } from './StatusText';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.scss']
})
export class ContentContainerComponent {

  statusText: StatusText= "Waiting for Part";
  _mactchingScore: number = 78;
  videoFeed: string = environment.videoFeed;

  get matchingScore() {
    return this._mactchingScore;
  }

  set matchingScore(score: number) {

    if (this._mactchingScore < 0) {
      this._mactchingScore = 0;
    } else if (this._mactchingScore > 100) {
      this._mactchingScore = 100;
    } else {
      this._mactchingScore = score;
    }
  }
}
