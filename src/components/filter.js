import AbstractComponent from './abstract-сomponent';

/**
 * Отрисовка фильтра
 * @param {string} filterName
 * @param {boolean} isChecked
 * @return {string}
 */
export default class Filter extends AbstractComponent {
  constructor(filterList, defaultFilter) {
    super();
    this._filterList = filterList;
    this._defaultFilter = defaultFilter;
  }

  _getFilterList() {
    return this._filterList.reduce((resultHtml, filterNameItem) => {
      return resultHtml + `
            <div class="trip-filters__filter wrapper-${filterNameItem}">
              <input id="filter-${filterNameItem}"
                class="trip-filters__filter-input visually-hidden"
                data-filter-name="${filterNameItem}"
                type="radio"
                name="trip-filter"
                value="${filterNameItem}"
                ${filterNameItem === this._defaultFilter ? `checked` : ``}
              >
              <label class="trip-filters__filter-label" for="filter-${filterNameItem}">${filterNameItem}</label>
            </div>
          `;
    }, ``);
  }

  getTemplate() {
    return `
      <form class="trip-filters" action="#" method="get">
        <div class="trip-filters__filter">
        ${this._getFilterList()}
        <button class="visually-hidden" type="submit">Accept filter</button>
      </form>
    `;
  }
}
