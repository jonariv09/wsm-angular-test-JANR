import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IAppConfig } from '../models/app-config.model';


@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  static settings: IAppConfig;

  constructor(private http: HttpClient) {
  }

  load() {
    const jsonFile = `../../../../assets/config/config.json`;

    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: any) => {
        AppConfigService.settings = response as IAppConfig;
        resolve();
      }).catch((response: any) => {
        reject(`Could not load file '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
