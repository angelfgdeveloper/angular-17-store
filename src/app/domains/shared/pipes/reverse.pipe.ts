import { Pipe, PipeTransform } from '@angular/core';

// ng g p domains/shared/pipes/reverse

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}
