const { User } = require('../models');

const users = [
    {
        username: 'Lally89',
        password: 'password1' 
    },
    {
        username: 'King84',
        password: 'password2'
    },
    {
        username: 'Elliot04',
        password: 'password3'
    }
];

const seedUser = () => User.bulkCreate(users, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUser;