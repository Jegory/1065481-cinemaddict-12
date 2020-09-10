"use strict";

const TASK_COUNT = 3;

// for (let i = 0; i < TASK_COUNT; i++) {
//   render(filmsSectionElement, createFilmsListTemplate(), `beforeend`);
// }

const allFilms = [
  {
    title: `The Dance of Life`,
    rating: `8.3`,
    year: `1929`,
    duration: `1h 55m`,
    genre: `Musical`,
    imgSrc: `./images/posters/the-dance-of-life.jpg`,
    description: `Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…`,
    comments: `5 comments`,
  },
  {
    title: `Sagebrush Trail`,
    rating: `3.2`,
    year: `1933`,
    duration: `54m`,
    genre: `Western`,
    imgSrc: `./images/posters/sagebrush-trail.jpg`,
    description: `Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant's narrow escap…`,
    comments: `89 comments`,
  },
  {
    title: `The Man with the Golden Arm`,
    rating: `9.0`,
    year: `1955`,
    duration: `1h 59m`,
    genre: `Drama`,
    imgSrc: `./images/posters/the-man-with-the-golden-arm.jpg`,
    description: `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
    comments: `18 comments`,
  },
  {
    title: `Santa Claus Conquers the Martians`,
    rating: `2.3`,
    year: `1964`,
    duration: `1h 21m`,
    genre: `Comedy`,
    imgSrc: `./images/posters/santa-claus-conquers-the-martians.jpg`,
    description: `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
    comments: `465 comments`,
  },
  {
    title: `Popeye the Sailor Meets Sindbad the Sailor`,
    rating: `6.3`,
    year: `1936`,
    duration: `16m`,
    genre: `Cartoon`,
    imgSrc: `./images/posters/popeye-meets-sinbad.png`,
    description: `In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…`,
    comments: `0 comments`,
  },
];

const topRated = [
  {
    title: `The Man with the Golden Arm`,
    rating: `9.0`,
    year: `1955`,
    duration: `1h 59m`,
    genre: `Drama`,
    imgSrc: `./images/posters/the-man-with-the-golden-arm.jpg`,
    description: `Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…`,
    comments: `18 comments`,
  },
  {
    title: `The Great Flamarion`,
    rating: `8.9`,
    year: `1945`,
    duration: `1h 18m`,
    genre: `Mystery`,
    imgSrc: `./images/posters/the-great-flamarion.jpg`,
    description: `The film opens following a murder at a cabaret in Mexico City in 1936, and then presents the events leading up to it in flashback. The Grea…`,
    comments: `12 comments`,
  },
];

const mostCommented = [
  {
    title: `Santa Claus Conquers the Martians`,
    rating: `2.3`,
    year: `1964`,
    duration: `1h 21m`,
    genre: `Comedy`,
    imgSrc: `./images/posters/santa-claus-conquers-the-martians.jpg`,
    description: `The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…`,
    comments: `465 comments`,
  },
  {
    title: `Made for Each Other`,
    rating: `5.8`,
    year: `1939`,
    duration: `1h 32m`,
    genre: `Comedy`,
    imgSrc: `./images/posters/made-for-each-other.png`,
    description: `John Mason (James Stewart) is a young, somewhat timid attorney in New York City. He has been doing his job well, and he has a chance of bei…`,
    comments: `56 comments`,
  },
];

const createProfileTemplate = () => ( // профиль
  `
    <section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>
  `
);

const createMenuTemplate = () => ( // меню, навигация
  `
    <nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
      </div>
        <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>
  `
);

const createSortTemplate = () => ( // сортировка
  `
    <ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>
  `
);

const createFilmsSection = () => (
  `
      <section class="films"></section>
  `
);

// карточка фильма
const createFilmCardTemplate = ({title, rating, year, duration, genre, imgSrc, description, comments}) => (
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

const createFilmCardControls = () => ( // форма в карточке
  `
    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite film-card__controls-item--active">Mark as favorite</button>
    </form>
  `
);

const createShowMoreButton = () => ( // кнопка Show more
  `
    <button class="films-list__show-more">Show more</button>
  `
);

const createFilmsListTemplate = ({list = [], listTitle = ``, visuallyHideTitle = false, isRenderButtonShown = false, isExtra = false}) => {
  const filmCards = list.map((item) => createFilmCardTemplate(item));
  return (
    `
      <section class="films-list${isExtra ? `--extra` : ``}">
        <h2 class="films-list__title ${visuallyHideTitle ? `visually-hidden` : ``}">${listTitle}</h2>
        <div class="films-list__container">${filmCards.join(``)}</div>
        ${isRenderButtonShown ? createShowMoreButton() : ``}
      </section>
    `
  );
};

const createFooterStatisticsTemplate =
  `
    <p>130 291 movies inside</p>
  `
  ;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const insertHeaderElement = document.querySelector(`.header`);
render(insertHeaderElement, createProfileTemplate(), `beforeend`);

const insertMenuElement = document.querySelector(`.main`);
render(insertMenuElement, createMenuTemplate(), `beforeend`);
render(insertMenuElement, createSortTemplate(), `beforeend`);
render(insertMenuElement, createFilmsSection(), `beforeend`);

const filmsSectionElement = insertMenuElement.querySelector(`.films`);
render(filmsSectionElement, createFilmsListTemplate({list: allFilms, listTitle: `All movies. Upcoming`, visuallyHideTitle: true, isRenderButtonShown: true}), `beforeend`);
render(filmsSectionElement, createFilmsListTemplate({list: topRated, listTitle: `Top rated`, isExtra: true}), `beforeend`);
render(filmsSectionElement, createFilmsListTemplate({list: mostCommented, listTitle: `Most commented`, isExtra: true}), `beforeend`);

const insertFooterElement = document.querySelector(`.footer`);
const filmStatisticElement = insertFooterElement.querySelector(`.footer__statistics`);
render(filmStatisticElement, createFooterStatisticsTemplate, `beforeend`);




