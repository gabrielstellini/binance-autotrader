import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleManagerService {
  constructor() {}

  /**
   * Set the stylesheet with the specified key.
   */
  setStyle(key: string, href: string): void {
    getLinkElementForKey(key).setAttribute('href', href);
  }

  /**
   * Remove the stylesheet with the specified key.
   */
  removeStyle(key: string): void {
    const existingLinkElement = getExistingLinkElementByKey(key);
    if (existingLinkElement) {
      document.head.removeChild(existingLinkElement);
    }
  }
}

function getLinkElementForKey(key: string): HTMLElement {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string): HTMLElement | null {
  return document.head.querySelector(
    `link[rel="stylesheet"].${getClassNameForKey(key)}`
  );
}

function createLinkElementWithKey(key: string): HTMLLinkElement {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key: string): string {
  return `app-${key}`;
}

