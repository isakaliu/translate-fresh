import { NgModule } from '@angular/core';
import { TranslateFreshComponent } from './translate-fresh.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [TranslateFreshComponent],
  imports: [
    HttpClientModule
  ],
  providers: [HttpClient],
  exports: [TranslateFreshComponent]
})
export class TranslateFreshModule { }
