import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MediaComponent } from './media/media/media.component';
import { LinearRegressionComponent } from './linear-regression/linear-regression.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaComponent,
    LinearRegressionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
