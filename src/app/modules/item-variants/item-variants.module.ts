import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemVariantsComponent } from './item-variants.component';
import { ItemVariantsInfoComponent } from './item-variants-info/item-variants-info.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    ItemVariantsComponent,
    ItemVariantsInfoComponent
  ],
  exports: [ItemVariantsComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatCheckboxModule
  ]
})
export class ItemVariantsModule { }
