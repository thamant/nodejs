const request = require('request');

const url =
  'https://api.darksky.net/forecast/afb418498e07cb8e49b97f7fd5c74c17/37.8267,-122.4233';

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
