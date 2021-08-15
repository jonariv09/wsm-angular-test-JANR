import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ItemVariantsService } from 'src/app/shared/services/item-variants.service';

@Component({
  selector: 'app-item-variants',
  templateUrl: './item-variants.component.html',
  styleUrls: ['./item-variants.component.scss']
})
export class ItemVariantsComponent implements OnInit {
  listItemVariants: any[] = [];
  selectedItem: any;
  selectItemId: any;
  campaignGroupName: any;
  campaigns: any;
  campaignName: any;

  campaignsAnalyzed: number = 0;

constructor(private itemVariantsService: ItemVariantsService,
    private cdRef: ChangeDetectorRef) { }

  async ngOnInit(): Promise<void> {
    this.listItemVariants = await this.itemVariantsService.getItemVariants();
    this.campaignGroupName = await this.itemVariantsService.getCampaignGroup();
    this.campaigns = await this.itemVariantsService.getCampaigns();
    this.campaignName = this.campaigns[0].name;
    this.selectedItem = this.listItemVariants[0];

  }

  selectItemVariant(itemId: number) {
    this.selectItemId = itemId;
    this.selectedItem = this.getItemById(itemId);
  }

  getItemById(id: number) {
    return this.listItemVariants.find(item => item._id === id);
  }

}
