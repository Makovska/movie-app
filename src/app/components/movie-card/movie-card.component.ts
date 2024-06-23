import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GetReleaseYearPipe } from "../../pipes/getReleaseYear/get-release-year.pipe";
import { GetGenresSpacesPipe } from "../../pipes/getGenresSpaces/get-genres-spaces.pipe";

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [GetReleaseYearPipe, GetGenresSpacesPipe],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
	@Input() data: any;
	@Output() addFavorites = new EventEmitter<any>();
	@Output() addWatchList = new EventEmitter<any>();
	@Output() removeFavorites = new EventEmitter<any>();
	@Output() removeWatchList = new EventEmitter<any>();
	addToFavorites() {
		this.addFavorites.emit(this.data.id);
		this.removeFavorites.emit(this.data.id)
	}
	addToWatchList() {
		this.addWatchList.emit(this.data.id);
		this.removeWatchList.emit(this.data.id)
	}
}
