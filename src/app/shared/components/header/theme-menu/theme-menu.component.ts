import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { ThemeName, ThemeOption } from '../theme-option.model';

@Component({
  selector: 'app-theme-menu',
  templateUrl: './theme-menu.component.html',
  styleUrls: ['./theme-menu.component.scss']
})
export class ThemeMenuComponent {
  @Input() options: ThemeOption[] = [];
  @Output() themeChange: EventEmitter<ThemeName> = new EventEmitter<ThemeName>();

  constructor(private themeService: ThemeService) {}

  changeTheme(themeToSet: ThemeName): void {
    this.themeChange.emit(themeToSet);
  }
}
