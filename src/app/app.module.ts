import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { LayaoutComponent } from './components/layaout/layaout.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    LayaoutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
