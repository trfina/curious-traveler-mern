const { Comment } = require('../models');
const chalk = require('chalk');

const commentdata = [
  {
    comment_text: 'Love this place!',
    user_id: 5,
    post_id: 1
  },
  {
    comment_text: 'Cant wait to go here!',
    user_id: 5,
    post_id: 2
  },
  {
    comment_text: 'Adding this to my roadtrip list!',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Sooo retro!',
    user_id: 4,
    post_id: 4
  }
];
console.log(chalk.green('updating comment table with new data'));
const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
