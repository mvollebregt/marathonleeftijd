import {Component} from '@angular/core';
import {UserParameters} from '../shared/user-parameters.service';
import {CalculationService} from '../shared/calculation.service';
import {Result} from '../shared/result';

@Component({
  selector: 'mar-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  result: Result;

  constructor(public parameters: UserParameters, calculationService: CalculationService) {
    this.result = calculationService.calculateAge(parameters);
  }

}
