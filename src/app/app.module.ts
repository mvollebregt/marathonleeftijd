import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StartComponent} from './start/start.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {StatusComponent} from './status/status.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatButtonModule} from '@angular/material/button';
import {EnterGenderComponent} from './enter-gender/enter-gender.component';
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule} from '@angular/forms';
import {EnterDistanceComponent} from './enter-distance/enter-distance.component';
import {EnterTimeComponent} from './enter-time/enter-time.component';
import {MatInputModule} from '@angular/material/input';
import {ResultComponent} from './result/result.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    StatusComponent,
    EnterGenderComponent,
    EnterDistanceComponent,
    EnterTimeComponent,
    ResultComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
