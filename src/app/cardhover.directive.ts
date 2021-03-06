import { Directive, ElementRef, Renderer, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ccCardHover]'
})
export class CardhoverDirective {

  @HostBinding('class.card-outline-primary')private ishovering: boolean;

  @Input('ccCardHover') config = {
    querySelector: '.card-text'
  };

  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'block');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setElementStyle(part, 'display', 'none');
    this.ishovering = false;
  }

}