import {Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBold]',
  // host: {                              // The same as HostListener, or HostBinding
  //   '(mouseenter)': 'onMouseEnter()',
  //   '(mouseleave)': 'onMouseLeave()'
  // }
})

export class BoldDirective {

  private fontWeight = 'normal';

  constructor() {}

  @HostBinding('style.fontWeight') get getFontWeight() {

    return this.fontWeight;
  }

  @HostBinding('style.cursor') get getCursor() {

    return 'pointer';
  }

  @HostListener('mouseenter') onMouseEnter() {

    this.fontWeight = 'bold';
  }

  @HostListener('mouseleave') onMouseLeave() {

    this.fontWeight = 'normal';
  }

}
