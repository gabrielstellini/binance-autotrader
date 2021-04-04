import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { ThemeName, ThemeOption } from './theme-option.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  themeOptions: ThemeOption[] = [];
  destroy$ = new Subject();

  constructor(private readonly themeService: ThemeService) {
    this.themeService.getThemeOptions()
    .pipe(takeUntil(this.destroy$))
    .subscribe((themeOptions) => {
      this.themeOptions = themeOptions;
    });
  }

  ngOnInit(): void {
    this.themeService.setTheme(ThemeName.indigo_pink);
  }

  themeChangeHandler(themeToSet: ThemeName): void {
    this.themeService.setTheme(themeToSet);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }
}
