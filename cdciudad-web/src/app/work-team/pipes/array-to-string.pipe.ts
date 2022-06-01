import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString',
})
export class ArrayToStringPipe implements PipeTransform {
  transform(value: string[] | undefined): string {
    let finalValue: string = '';
    if (value) {
      for (let i = 0; i < value.length; i++) {
        if (i != 0) {
          finalValue += ', ' + value[i];
        } else {
          finalValue += value[i];
        }
      }
    }
    return finalValue;
  }
}
