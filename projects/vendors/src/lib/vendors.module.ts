import {NgModule} from '@angular/core';
import {VendorsComponent} from './vendors.component';
import {MatButtonModule} from '@angular/material/button';
import { LovingPipe } from './loving.pipe';
// import { ExponentialStrengthPipe } from './exponential-strength.pipe';


@NgModule({
  declarations: [VendorsComponent, LovingPipe],
  imports: [
    MatButtonModule
  ],
  exports: [
    VendorsComponent,
    MatButtonModule]
})
export class VendorsModule {
}
