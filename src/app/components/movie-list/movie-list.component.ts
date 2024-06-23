import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import {movies} from "../../../assets/mock-data.js";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
	
export class MovieListComponent {
	public movies: any = movies;
	public favoritesList: any = [];
	public watchList: any = [];
	
	//   Додавання фильмів до Favorites та WatchList
	private addMovieInList(id: number, list: any) {
		const isMovieInList = list.find((movie: { id: number }) => movie.id === id);
		if (!isMovieInList) {
			list.push(this.movies.find((movie: { id: number }) => movie.id === id))
		}
		return list
	}
	public handleAddFavorites(id: number) {
		this.favoritesList = this.addMovieInList(id, this.favoritesList);
		console.log(this.favoritesList);
  }
	public handleAddWatchList(id: number) {
		this.watchList = this.addMovieInList(id, this.watchList);
		console.log(this.watchList);
	}

	//   Видалення фильмів з Favorites та WatchList
	private removeMovieInList(id: number, list: any) {
		const removeIndex = list.findIndex((movie: { id: number; }) => movie.id === id)
		list.splice(removeIndex, 1)
		return list
	}
	public handleRemoveFavorites(id: number) {
		this.favoritesList = this.removeMovieInList(id, this.favoritesList);
		console.log(this.favoritesList);
	}
	public handleRemoveWatchList(id: number) {
		this.watchList = this.removeMovieInList(id, this.watchList);
		console.log(this.watchList);
	}
}