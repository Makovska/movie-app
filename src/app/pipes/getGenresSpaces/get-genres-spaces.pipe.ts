import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getGenresSpaces',
  standalone: true
})
export class GetGenresSpacesPipe implements PipeTransform {

	transform(value: any): string {
		if (value == null) {
			return '';
		}
		return value.join(', ');
  }

}
