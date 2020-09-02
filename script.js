const inputField = document.querySelector('#input');
const outputField = document.querySelector('#output');
const countOfElements = document.querySelector('.output-block__details');
const btn = document.querySelector('#sortBtn');

btn.addEventListener("click", sort);

function sort() {
  setValue(
    inputField,
    outputField,
    countOfElements,
    sortArray(
      getValue(inputField)
    )
  );
}

function getValue(source) {
  const result = source.value.split(',')
    .map(el => parseInt(el));

  result.forEach(el => {
    if (isNaN(el)) {
      source.value = '';
      alert('Please, try to enter correct data!');
      return;
    }
  });

  return result;
}

function sortArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] > current) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }

  return arr;
}

function setValue(input, output, numOfElementsField, arr) {
  if (arr.includes(NaN)) return;
  input.value = '';
  output.textContent = arr;
  numOfElementsField.textContent = `Number of elements: ${arr.length}`;
}