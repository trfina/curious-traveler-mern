const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const chalk = require('chalk');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: false });
  console.log(chalk.red('---Bypassing seeding users----'));
  // await seedUsers();
  // console.log(chalk.green('--seeding users ==> success--'));

  await seedPosts();
  console.log(chalk.green('--seeding posts--'));

  await seedComments();
  console.log(chalk.green('---seeding comments--'));

  process.exit(0);
};

seedAll();
