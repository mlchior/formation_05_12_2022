import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  transform(value: number): unknown {
    const hours = Math.floor(value / 3600);
    const minutes = Math.floor((value % 3600) / 60);
    const seconds = value % 60;

    let ret = '';
    if (hours) ret += hours + 'h ';
    if (minutes) ret += minutes + 'mn ';
    if (seconds) ret += seconds + 's ';

    return ret;
  }
}
