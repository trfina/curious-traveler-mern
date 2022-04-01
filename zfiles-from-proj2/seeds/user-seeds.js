const sequelize = require('../config/connection');
const { User} = require('../models');

const userdata = [
  {
    username: 'CuriousT',
    email: 'curioust@gmail.com',
    password: 'pw1234'
  } 
]
const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
