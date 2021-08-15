import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FullLayoutComponent } from './components/full-layout/full-layout.component';
import { ItemVariantsModule } from '../modules/item-variants/item-variants.module';
import { HttpClientModule } from '@angular/common/http';
import { AppLoadModule } from '../modules/core/app-loader.modules';

@NgModule({
  declarations: [
    NavbarComponent,
    FullLayoutComponent
  ],
  imports: [
    CommonModule,
    ItemVariantsModule,
    HttpClientModule,
    AppLoadModule
  ]
})
export class SharedModule { }
