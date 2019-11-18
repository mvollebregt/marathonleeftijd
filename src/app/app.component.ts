import {Component} from '@angular/core';
import {UserParameters} from './shared/user-parameters.service';
import {Router} from '@angular/router';

@Component({
  selector: 'mar-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public parameters: UserParameters, router: Router) {
    router.navigate(['']);
  }

}
