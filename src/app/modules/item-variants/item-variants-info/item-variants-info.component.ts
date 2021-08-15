import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-item-variants-info',
  templateUrl: './item-variants-info.component.html',
  styleUrls: ['./item-variants-info.component.scss']
})
export class ItemVariantsInfoComponent implements OnInit {
  @Input() itemVariant: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
