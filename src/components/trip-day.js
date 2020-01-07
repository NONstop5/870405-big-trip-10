import AbstractComponent from './abstract-сomponent';

export default class TripDay extends AbstractComponent {
  constructor(dayCounter, dayDate) {
    super();
    this._dayCounter = dayCounter;
    this._dayDate = dayDate;
  }

  getTemplate() {
    return `
      <li class="trip-days__item day">
        <div class="day__info">
          <span class="day__counter">${this._dayCounter ? this._dayCounter : ``}</span>
          <time class="day__date" datetime="${this._dayDate}">${this._dayDate}</time>
        </div>
    
        <ul class="trip-events__list">
        </ul>
      </li>
    `;
  }
}
