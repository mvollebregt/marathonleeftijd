import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {UserParameters} from '../shared/user-parameters.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mar-enter-time',
  templateUrl: './enter-time.component.html',
  styleUrls: ['./enter-time.component.scss']
})
export class EnterTimeComponent {

  timeGroup: FormGroup;

  constructor(public parameters: UserParameters, private router: Router, formBuilder: FormBuilder) {
    this.timeGroup = formBuilder.group({
      hours: ['', [Validators.min(0), Validators.max(99)]],
      minutes: ['', [Validators.min(0), Validators.max(59), Validators.required]],
      seconds: ['', [Validators.min(0), Validators.max(59), Validators.required]]
    });
  }

  onSubmit() {
    if (this.timeGroup.valid) {
      this.parameters.finishTime = this.timeGroup.value;
      this.router.navigate(['result']);
    }
  }
}
