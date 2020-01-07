const Position = {
  PREPEND: `prepend`,
  APPEND: `append`,
};

/**
 * Генерации целого случайного числа из заданного диапазона
 * @param {int} minValue
 * @param {int} maxValue
 * @return {int}
 */
const getRandomValueRange = (minValue, maxValue) => {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, element, place) => {
  switch (place) {
    case Position.PREPEND:
      container.prepend(element);
      break;
    case Position.APPEND:
      container.append(element);
      break;
  }
};

const unrender = (element) => {
  if (element) {
    element.remove();
  }
};

export {
  getRandomValueRange,
  createElement,
  render,
  unrender,
  Position
};
