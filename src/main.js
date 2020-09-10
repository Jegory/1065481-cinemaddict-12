import {createMenuTemplate} from './view/siteMenuTemplate.js';
import {createProfileTemplate} from './view/profileTemplate.js';
import {createSortTemplate} from './view/sortTemplate.js';
import {createFilmsSection} from './view/filmsSection.js';
import {createFilmsListTemplate} from './view/filmsListTemplate.js';
import {createFooterStatisticsTemplate} from './view/footerStatisticsTemplate.js';

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
