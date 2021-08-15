import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ItemVariantsModule } from './modules/item-variants/item-variants.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ItemVariantsModule,
    BrowserAnimationsModule,
    MatExpansionModule
  ],
  exports: [SharedModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
