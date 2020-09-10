import {createFilmCardTemplate} from './filmCardTemplate.js';
import {createShowMoreButton} from './showMoreButton.js';

export const createFilmsListTemplate = ({list = [], listTitle = ``, visuallyHideTitle = false, isRenderButtonShown = false, isExtra = false}) => {
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
