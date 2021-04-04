import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { HeaderComponent } from './components/header/header.component';
import { ThemeMenuComponent } from './components/header/theme-menu/theme-menu.component';
import { LiveDataService } from './services/live-data.service';
import { StyleManagerService } from './services/style-manager.service';
import { ThemeService } from './services/theme.service';
import { WebhookSocketService } from './services/webhook-socket.service';
import { SharedMaterialModule } from './shared-material.module';


@NgModule({
  declarations: [
    ImgFallbackDirective,
    HeaderComponent,
    ThemeMenuComponent
  ],
  exports: [
    ImgFallbackDirective,
    HeaderComponent,
    ThemeMenuComponent
  ],
  providers: [
    LiveDataService,
    StyleManagerService,
    ThemeService,
    WebhookSocketService
  ],
  imports: [
    CommonModule,
    SharedMaterialModule
  ]
})
export class SharedModule { }
