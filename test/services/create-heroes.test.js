const assert = require('assert');
const app = require('../../src/app');

describe('\'createHeroes\' service', () => {
  it('registered the service', () => {
    const service = app.service('create-heroes');

    assert.ok(service, 'Registered the service');
  });
});
