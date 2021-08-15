import { HttpClientModule } from "@angular/common/http";
import { NgModule, APP_INITIALIZER } from "@angular/core";
import { AppConfigService } from "./services/app-config.service";
import * as factory from './app-loader.factories'



@NgModule({
  imports: [
    HttpClientModule,
  ],
  providers: [
    AppConfigService,
    { provide: APP_INITIALIZER, useFactory: factory.initializeApp, deps: [AppConfigService], multi: true },
  ]
})
export class AppLoadModule { }
