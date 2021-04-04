import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgFallback]'
})
export class ImgFallbackDirective {

  @Input() appImgFallback?: string;

  constructor(private eRef: ElementRef) { }

  @HostListener('error')
  loadFallbackOnError(): void {
    const element: HTMLImageElement = this.eRef.nativeElement as HTMLImageElement;
    element.src = this.appImgFallback ? this.appImgFallback : '';
  }

}
