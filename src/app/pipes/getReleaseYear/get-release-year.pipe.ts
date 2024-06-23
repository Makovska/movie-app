import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getReleaseYear',
  standalone: true
})
export class GetReleaseYearPipe implements PipeTransform {

	transform(value: string): string {
		if (value == null) {
			return '';
		}
		return value.slice(0, 4)
  }

}
