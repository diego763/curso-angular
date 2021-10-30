import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsTo'
})
export class SecondsToPipe implements PipeTransform {

  transform(seconds: number, to: 'minutes' | 'hours' = 'minutes', type: 'string' | 'number' = 'number'): string | number {
    let returnValue: string | number;
    if(to==='hours'){
      returnValue = (seconds / 3600).toFixed(2);
    }
    else{
      returnValue = (seconds / 60).toFixed(2);
    }
    return type==='string'? returnValue.toString() : returnValue;

  }

}
