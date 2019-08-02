const fs = require('fs');

const dataBuffer = fs.readFileSync('1_json.json');
console.log("dataBuffer: ", dataBuffer);
const dataJSON = dataBuffer.toString();
console.log("dataJSON: ", dataJSON);
const profile = JSON.parse(dataJSON);
console.log("profile: ", profile);

profile.name = 'Devin';
profile.age = '35';

const profileJSON = JSON.stringify(profile);
fs.writeFileSync('1_json.json', profileJSON);

console.log(profile);
