import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    HeaderComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
