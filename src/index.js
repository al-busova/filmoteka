import { getPopularMovies } from './js/getFetch';
import { getSearchMovies } from './js/getFetch';
import { getMovieById } from './js/getFetch';
import { showPopularMovieGallery } from './js/showPopularMovieGallery';
import { getPagination } from './js/pagination';
import modal from './js/modal'
import axios from 'axios';

showPopularMovieGallery(1);

getPagination();
