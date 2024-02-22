const bcrypt = require('bcryptjs');

let password = 'password123';

const hashPass = (password) => {
    const hash = bcrypt.hashSync(password, 13);
    return hash;
};

const hashedPass = hashPass(password);
console.log(hashedPass);
// $2a$12$2q9fQ2so8M67u7IAoR8zZe0XtqG0oXkDm53RzjuA6vb0OwH3nm1tC
//  \_/\_/\_____________________/\_____________________________/
//  /   |         |                           |
//algo cost     salt                        hash

password = 'nope'

const testPass = (password, hash) => {
    const isPass = bcrypt.compareSync(password, hash);
    return isPass;
};

console.log(testPass(password, hashedPass));