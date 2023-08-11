import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import ComponentOne from './component-one';
import ComponentTwo from './component-two';
import ComponentAux from './component-aux';
import ComponentFoo from './component-foo';
import { routing, appRoutingProviders } from './app.routes';

@NgModule({
  imports: [BrowserModule, routing],
  declarations: [
    AppComponent,
    ComponentOne,
    ComponentTwo,
    ComponentAux,
    ComponentFoo,
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
