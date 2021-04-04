import { Injectable } from '@angular/core';
import { ThemeName, ThemeOption } from '../components/header/theme-option.model';
import { Observable, of } from 'rxjs';
import { StyleManagerService } from './style-manager.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  // store on API?
  theme: ThemeOption[] = [
    {
      backgroundColor: '#fff',
      buttonColor: '#ffc107',
      headingColor: '#673ab7',
      label: 'Deep Purple & Amber',
      value: ThemeName.deep_purple_amber
    },
    {
      backgroundColor: '#fff',
      buttonColor: '#ff4081',
      headingColor: '#3f51b5',
      label: 'Indigo & Pink',
      value: ThemeName.indigo_pink
    },
    {
      backgroundColor: '#303030',
      buttonColor: '#607d8b',
      headingColor: '#e91e63',
      label: 'Pink & Blue Grey',
      value: ThemeName.pink_bluegrey
    },
    {
      backgroundColor: '#303030',
      buttonColor: '#4caf50',
      headingColor: '#9c27b0',
      label: 'Purple & Green',
      value: ThemeName.purple_green
    }
  ];

  constructor(
    // private http: HttpClient,
    private styleManager: StyleManagerService
  ) {}

  getThemeOptions(): Observable<ThemeOption[]> {
    // return this.http.get<Array<Option>>("assets/options.json");
    return of(this.theme);
  }

  setTheme(themeToSet: ThemeName): void {
    this.styleManager.setStyle(
      'theme',
      `assets/${themeToSet}.css`
    );
  }
}
