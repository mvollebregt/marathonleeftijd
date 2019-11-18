import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {UserParameters} from '../shared/user-parameters.service';
import {Router} from '@angular/router';
import {distances} from '../shared/distance';

@Component({
  selector: 'mar-enter-distance',
  templateUrl: './enter-distance.component.html',
  styleUrls: ['./enter-distance.component.scss']
})
export class EnterDistanceComponent implements OnInit {

  distanceControl = new FormControl();
  values = distances;

  constructor(private parameters: UserParameters, private router: Router) {
  }

  ngOnInit() {
    this.distanceControl.valueChanges.subscribe(() => {
      this.router.navigate(['time']);
      this.parameters.distance = this.distanceControl.value;
    });
  }


}
