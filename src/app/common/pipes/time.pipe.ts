import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time',
})
export class TimePipe implements PipeTransform {
  // HTML Syntax : {{ myVar | PIPE_NAME:param1:param2:param3 }}
  // Used to transform a value before rendering it to the user
  transform(value: number, param1?: any, param2?: any, param3?: any): unknown {
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
