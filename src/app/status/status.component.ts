import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {faFemale, faMale} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'mar-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnChanges {

  @Input() gender: 'male' | 'female' = 'female';

  genderIcon = faFemale;
  distance = 'halvemarathonleeftijd';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.gender) {
      this.genderIcon = this.gender === 'male' ? faMale : faFemale;
    }
  }


}
