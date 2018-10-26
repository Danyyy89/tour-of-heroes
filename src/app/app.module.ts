import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// Auto imported
import { AppComponent } from './app.component';
import { HerosComponent } from './heros/heros.component';

// Import FormsModule, ngModel lives here
import { FormsModule } from '@angular/forms';

@NgModule({
  // every component MUST be declared here
  declarations: [
    AppComponent,
    HerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
