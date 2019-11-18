import {Component} from '@angular/core';
import {UserParameters} from '../shared/user-parameters.service';

@Component({
  selector: 'mar-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  constructor(parameters: UserParameters) {
    parameters.gender = undefined;
    parameters.distance = undefined;
    parameters.finishTime = undefined;
  }

}
