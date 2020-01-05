import AbstractComponent from './abstract-сomponent';

export default class TripDayList extends AbstractComponent {
  getTemplate() {
    return `<ul class="trip-days">
    </ul>`.trim();
  }
}
