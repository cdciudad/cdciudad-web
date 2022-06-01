import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onlyName',
})
export class OnlyNamePipe implements PipeTransform {
  transform(value: string | undefined): string {
    let finalValue: string = '';
    if (value) {
      for (let i = 0; i < value.length; i++) {
        if (value.charAt(i) !== ' ') {
          finalValue += value.charAt(i);
        } else {
          return finalValue;
        }
      }
    }
    return finalValue;
  }
}
