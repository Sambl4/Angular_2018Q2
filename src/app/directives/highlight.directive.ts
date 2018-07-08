import { Directive, Renderer2, ElementRef } from '@angular/core';
@Directive({
  selector: '[appBorderHighlighter]'
})
export class BorderHighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el, renderer)
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'green');
  }
}
