import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoModalComponent } from './demo-modal/demo-modal.component';
import { ModalModule } from './modal/modal.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule
  ],
  providers: [],
  entryComponents: [DemoModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
