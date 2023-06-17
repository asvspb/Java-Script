const server = require('express');
const app = server();
const port = 3000;

app.get('/', function (req, res) {
    console.log(req);
    res.send('Hello world!! Express is working!');
});

// app.listen(port, () => console.log('Server is now running on port 3000...'));

let someObject = {
    name: 'Alexander',
    nickname: 'asv',
    age: '48'
};
let json2String = JSON.stringify(someObject); //?
let string2Object = JSON.parse(json2String); //?

console.log(typeof (json2String));
console.log(typeof (string2Object));

// provide function to convert string to object
function stringToObject(str) {
    return JSON.parse(str);
}

console.log(stringToObject(json2String));