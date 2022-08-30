const rub = '#rub';
const cny = '#cny';

const rubText = '#rub_text';
const cnyText = '#cny_text';

const rubInputElement = document.querySelector(rub);
const cnyInputElement = document.querySelector(cny);

const rubTextElement = document.querySelector(rubText);
const cnyTextElement = document.querySelector(cnyText);


rubInputElement.addEventListener('input', onRubInputState);
rubInputElement.addEventListener('change', onRubInputChangeState);
cnyInputElement.addEventListener('input', onCnyInputState);
cnyInputElement.addEventListener('change', onCnyInputChangeState);

function onRubInputState() {
  const value = rubInputElement.value / 10.9;

  if (rubInputElement.value < 500) {
    rubInputElement.classList.add('main-block-input-danger')
  } else {
    rubInputElement.classList.remove('main-block-input-danger')
  }

  cnyInputElement.value = value.toFixed(2);
  rubTextElement.value = `${rubInputElement.value} руб`;
  cnyTextElement.value = `${value.toFixed(0)} cny`;
}

function onRubInputChangeState() {
  if (rubInputElement.value < 500) {
    alert('От 500 рублей!')
  }
}

function onCnyInputState() {
  const value = cnyInputElement.value * 8.9;

  if (cnyInputElement.value < 50) {
    cnyInputElement.classList.add('main-block-input-danger')
  } else {
    cnyInputElement.classList.remove('main-block-input-danger')
  }

  rubInputElement.value = value.toFixed(2);
  rubTextElement.value = `${value.toFixed(0)} руб`;
  cnyTextElement.value = `${cnyInputElement.value} cny`;
}

function onCnyInputChangeState() {
  if (cnyInputElement.value < 50) {
    alert('От 50 cny!')
  }
}
