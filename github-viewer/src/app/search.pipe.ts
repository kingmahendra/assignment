import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, input: string): any {
    if (input) {
       input = input.toLowerCase();
       return value.filter( el => {
          return el.name.toLowerCase().indexOf(input) > -1;
       })
    }
    return value;
  }

}
