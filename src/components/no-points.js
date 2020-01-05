import AbstractComponent from "./abstract-сomponent";

export default class NoPoint extends AbstractComponent {
  /**
   * Получаем шаблон элемента
   * @return {string}
   */
  getTemplate() {
    return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
  }
}
