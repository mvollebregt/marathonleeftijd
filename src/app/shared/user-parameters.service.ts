import {Injectable} from '@angular/core';
import {Gender} from './gender';
import {Distance} from './distance';
import {FinishTime} from './finish-time';

@Injectable({providedIn: 'root'})
export class UserParameters {

  gender: Gender;
  distance: Distance;
  finishTime: FinishTime;

}
