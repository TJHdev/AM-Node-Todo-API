const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

////////////////////////////////////////////////
const timestamp = new Date().getTime();

console.log(`Start timestamp: ${new Date().getTime() - timestamp}`);

let password = '123abc!';


// to hash the password we need to call 2 methods.

bcrypt.genSalt(10, (err, salt) => {
    console.log(salt);
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
        console.log(`Hash cb timestamp: ${new Date().getTime() - timestamp}`);
    })
    console.log(`Hash timestamp: ${new Date().getTime() - timestamp}`)
})


let hashedPassword = '$2a$10$5we0pEtSM8EU3PdMWfWvreRvfEwOgzrL.LtqPZaJYj18dAIzee1Dq';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
    console.log(`Compare timestamp: ${new Date().getTime() - timestamp}`);
})


////////////////////////////////////////////////

// let data = {
//     id: 10
// };

// let token = jwt.sign(data, '123abc');
// console.log(token);

// let decoded = jwt.verify(token , '123abc');
// console.log(decoded);


////////////////////////////////////////////////

// let message = 'I am user number 3';
// let hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     id: 4
// };

// let token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();


// let resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();

// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust!');
// }