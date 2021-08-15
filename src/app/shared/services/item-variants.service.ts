import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AppConfigService } from '../../modules/core/services/app-config.service'


@Injectable({
  providedIn: 'root'
})
export class ItemVariantsService {

  constructor(private http: HttpClient) { }

  getItemVariants() {
    return this.http.get<any[]>(`${AppConfigService.settings.API_URL}/items/`).toPromise();
  }

  getCampaignGroup() {
    return this.http.get<any>(`${AppConfigService.settings.API_URL}/campaign-groups/?id=1`).toPromise();
  }

  getCampaigns() {
    return this.http.get<any>(`${AppConfigService.settings.API_URL}/campaigns/`).toPromise();
  }

}
