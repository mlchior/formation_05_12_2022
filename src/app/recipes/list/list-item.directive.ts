import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appListItem]',
})
export class ListItemDirective {
  // HostBinding : bind to a property on the parent HTML element
  // Give a value to the variable decorated, which will serve as the value for the binding
  @HostBinding('style.cursor')
  private cursor = 'pointer';

  @HostBinding('style.user-select')
  private userselect = 'none';

  @HostBinding('style.transform')
  private transform = 'scale(1)';

  constructor() {}

  // Host listener : listen to events on the parent HTML element
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
