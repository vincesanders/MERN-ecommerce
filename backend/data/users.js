const bcrypt = require('bcryptjs');

const users = [
    {
        name: 'Admin User',
        email: 'vincesanders@hotmail.com',
        password: bcrypt.hashSync('123456', 10), //CHANGE THIS BEFORE PRODUCTION
        isAdmin: true
    },
    {
        name: 'Test User1',
        email: 'testuser1@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
    {
        name: 'Test User2',
        email: 'testuser2@example.com',
        password: bcrypt.hashSync('123456', 10)
    },
];

module.exports = users;