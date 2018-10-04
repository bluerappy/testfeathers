// Initializes the `createHeroes` service on path `/create-heroes`
const createService = require('feathers-mongoose');
const createModel = require('../../models/create-heroes.model');
const hooks = require('./create-heroes.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');
  console.log("Heroes Service")

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/create-heroes', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('create-heroes');

  service.hooks(hooks);
};
