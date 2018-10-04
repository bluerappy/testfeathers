const createHeroes = require('./create-heroes/create-heroes.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(createHeroes);
  app.configure(users);
};
