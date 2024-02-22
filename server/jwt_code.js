const jwt = require('jsonwebtoken');

const payload = {
    firstName: 'Anthony',
    lastName: 'Lovern'
};

const secretKey = 'supersecretkey';

const createToken = () => {
    const token = jwt.sign(payload, secretKey);
    return token
};

const token = createToken();
console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJBbnRob255IiwibGFzdE5hbWUiOiJMb3Zlcm4iLCJpYXQiOjE3MDg2MjY1OTJ9.YE9Z6E-wzIahAYOOjE2YNgwoYeYvtxZqG0XZzvd6QSg

const verifyToken = (token) => {
    const verified = jwt.verify(token, secretKey);
    return verified
};

const isVerified = verifyToken(token);
console.log(isVerified);