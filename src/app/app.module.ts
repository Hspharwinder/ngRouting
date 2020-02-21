import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpDetailComponent } from './emp-detail/emp-detail.component';
import { AbcRoutingModule, nav} from '../app/abc/abc-routing.module';
 
@NgModule({
  declarations: [
    AppComponent,    
    EmpDetailComponent,    
    nav
  ],
  imports: [
    BrowserModule,
    AbcRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
