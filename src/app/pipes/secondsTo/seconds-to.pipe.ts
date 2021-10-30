import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsTo'
})
export class SecondsToPipe implements PipeTransform {

  transform(seconds: number, to: 'minutes' | 'hours' = 'minutes', type: 'string' | 'number' = 'number'): string | number {
    return seconds;
  }

}
