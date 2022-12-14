import { renderMovieGallery } from './renderMovieGallery';
import { getPopularMovies } from './getFetch';
import { showLoader, hideLoader } from './loader';

export function showPopularMovieGallery(numberPage) {
  showLoader()

  getPopularMovies(numberPage)
    .then(data => {
      const filmsArray = data.results;
      console.log(filmsArray);
      renderMovieGallery(filmsArray);
      hideLoader()
    })
    .catch(error => console.log(error));
}
