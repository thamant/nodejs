const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = 'Hello World';
data.age = '1';

const replace = JSON.stringify(data);

fs.writeFileSync('1-json.json', replace);
