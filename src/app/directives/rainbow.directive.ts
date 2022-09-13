import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  /* Ce que je veux manipuler */
  @HostBinding('style.color') color = '';
  @HostBinding('style.borderColor') bc = 'black';
  constructor() {}

  /* Ce que je veux ecouter et ce que je veux faire */
  @HostListener('keyup') onKeyUp() {
    this.color = this.getRandomColor();
    this.bc = this.getRandomColor();
  }

  private getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
