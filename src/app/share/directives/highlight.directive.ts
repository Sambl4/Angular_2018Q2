import { Directive, Renderer2, ElementRef, Input, OnInit } from '@angular/core';

const currentDay: Date = new Date();

@Directive({
  selector: '[appBorderHighlighter]'
})

export class BorderHighlightDirective implements OnInit {
  @Input() appBorderHighlighter: string;

  private date: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.date = this.appBorderHighlighter;
    // console.log(this.date);
    // this.borderHighlighterByDate();
    // this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid green');
  }
  private borderHighlighterByDate() {
    // console.log(currentDay - this.date);
    // if (currentDay - this.date)
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid green');
  }

  ngOnInit() {
    this.date = this.appBorderHighlighter;
    // console.log(this.date);
    this.borderHighlighterByDate();
  }
}
