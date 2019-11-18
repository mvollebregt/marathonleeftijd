import {Component, OnInit} from '@angular/core';
import {faFemale, faMale} from '@fortawesome/free-solid-svg-icons';
import {FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import {UserParameters} from '../shared/user-parameters.service';

@Component({
  selector: 'mar-enter-gender',
  templateUrl: './enter-gender.component.html',
  styleUrls: ['./enter-gender.component.scss']
})
export class EnterGenderComponent implements OnInit {

  faMale = faMale;
  faFemale = faFemale;

  genderControl = new FormControl();

  constructor(private parameters: UserParameters, private router: Router) {
  }

  ngOnInit() {
    this.genderControl.valueChanges.subscribe(() => {
      this.router.navigate(['distance']);
      this.parameters.gender = this.genderControl.value;
    });
  }
}
