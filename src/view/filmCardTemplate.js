import {createFilmCardControls} from './filmCardControls.js';

export const createFilmCardTemplate = ({title, rating, year, duration, genre, imgSrc, description, comments}) => (
  `
    <article class="film-card">
        <h3 class="film-card__title">${title}</h3>
        <p class="film-card__rating">${rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${year}</span>
          <span class="film-card__duration">${duration}</span>
          <span class="film-card__genre">${genre}</span>
        </p>
        <img src=${imgSrc} alt="" class="film-card__poster">
        <p class="film-card__description">${description}</p>
        <a class="film-card__comments">${comments}</a>
        ${createFilmCardControls()}
    </article>
  `
);
