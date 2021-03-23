import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchValue:string) {
    if (!searchValue) return value;

    return value.filter(
      (v) =>
        v.body.indexOf(searchValue) > -1 || v.subject.indexOf(searchValue) > -1
    );
  }
}
