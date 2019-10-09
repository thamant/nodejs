console.log('Client side Javascript file.');

fetch('http://puzzle.mead.io/puzzle').then(response => {
  response.json().then(data => {
    console.log(data);
  });
});

fetch('http://localhost:3000/weather?address=!').then(response => {
  response.json().then(data => {
    if (data.error) {
      return console.log(data.error);
    }
    console.log(data.location);
    console.log(data.forecast);
  });
});

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

weatherForm.addEventListener('submit', e => {
  e.preventDefault();

  message1.textContent = 'Fetching weather data...';
  message2.textContent = '';
  const location = search.value;
  console.log(location);

  fetch('/weather?address=' + location).then(response => {
    response.json().then(data => {
      if (data.error) {
        return (message1.textContent = data.error);
      }
      message1.textContent = data.location;
      message2.textContent = data.forecast;
    });
  });
});
