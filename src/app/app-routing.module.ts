import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StartComponent} from './start/start.component';
import {EnterGenderComponent} from './enter-gender/enter-gender.component';
import {EnterDistanceComponent} from './enter-distance/enter-distance.component';
import {EnterTimeComponent} from './enter-time/enter-time.component';
import {ResultComponent} from './result/result.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'gender', component: EnterGenderComponent},
  {path: 'distance', component: EnterDistanceComponent},
  {path: 'time', component: EnterTimeComponent},
  {path: 'result', component: ResultComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
