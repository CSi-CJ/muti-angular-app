import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VendorsModule} from 'projects/vendors/src/lib/vendors.module';
import {WelcomePipe} from 'projects/vendors/src/lib/utils/welcome.pipe';
// import {ExponentialStrengthPipe} from 'projects/vendors/src/lib/exponential-strength.pipe';
import {FormsModule} from '@angular/forms';
import {AsyncPromisePipeComponent} from 'projects/administration/src/app/async-promise-pipe.component';
import {HeroAsyncMessageComponent} from 'projects/administration/src/app/hero-async-message.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    AsyncPromisePipeComponent,
    HeroAsyncMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VendorsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
