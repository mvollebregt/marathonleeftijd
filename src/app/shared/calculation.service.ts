import {Injectable} from '@angular/core';
import {UserParameters} from './user-parameters.service';
import {Result} from './result';

@Injectable({providedIn: 'root'})
export class CalculationService {

  calculateAge(parameters: UserParameters): Result {
    return {
      loper: 'Betty Jean McHugh',
      jaar: 2008,
      leeftijd: 80,
      tijd: {hours: 2, minutes: 4, seconds: 19},
      jouwleeftijd: 80.3
    };
  }
}
