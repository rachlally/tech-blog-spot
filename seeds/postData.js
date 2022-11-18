const { Post } = require('../models');

const posts = [
    {
        title: 'Heroku',
        content: 'Deploy for free but only for a limited time',
        user_id: 1
    },
    {
        title: 'Handlebars',
        content: 'A great starter to eventually working with React',
        user_id: 2
    },
    {
        title: 'Sequelize',
        content: 'Databases are so fun',
        user_id: 3
    }
];

const seedPost = () => Post.bulkCreate(posts);

module.exports = seedPost;