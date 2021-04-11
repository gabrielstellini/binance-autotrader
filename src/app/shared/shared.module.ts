import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { HeaderComponent } from './components/header/header.component';
import { ThemeMenuComponent } from './components/header/theme-menu/theme-menu.component';
import { StyleManagerService } from './services/style-manager.service';
import { ThemeService } from './services/theme.service';
import { WebhookSocketService } from './services/webhook-socket.service';
import { SharedMaterialModule } from './shared-material.module';
import { AccountService } from './services/account.service';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ImgFallbackDirective,
    HeaderComponent,
    ThemeMenuComponent,
  ],
  exports: [
    ImgFallbackDirective,
    HeaderComponent,
    ThemeMenuComponent
  ],
  providers: [
    StyleManagerService,
    ThemeService,
    WebhookSocketService,
    AccountService
  ],
  imports: [
    CommonModule,
    SharedMaterialModule,
    FlexLayoutModule,
    RouterModule
  ]
})
export class SharedModule { }
