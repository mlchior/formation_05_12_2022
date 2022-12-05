import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appListItem]',
})
export class ListItemDirective {
  @HostBinding('style.cursor')
  private cursor = 'pointer';

  @HostBinding('style.user-select')
  private userselect = 'none';

  @HostBinding('style.transform')
  private transform = 'scale(1)';

  constructor() {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this.transform = 'scale(1.1)';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.transform = 'scale(1)';
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    console.log('Will navigate to edit component');
  }
}
