import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
})
export class HighlightPipe implements PipeTransform {
  transform(list: any, searchValue): any {
    if (!list) return '';
    if (!searchValue) return list;

    if (list.indexOf(searchValue) > -1)
      return searchValue
        ? list.replace(
            new RegExp(searchValue, 'i'),
            `<span class="highlight-blue">${searchValue}</span>`
          )
        : list;
  }
}
