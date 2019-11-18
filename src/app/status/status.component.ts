import {Component, Input} from '@angular/core';
import {faFemale, faMale} from '@fortawesome/free-solid-svg-icons';
import {UserParameters} from '../shared/user-parameters.service';

@Component({
  selector: 'mar-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {

  @Input() parameters: UserParameters;

  faMale = faMale;
  faFemale = faFemale;

}
