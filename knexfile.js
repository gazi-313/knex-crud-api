// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'knextestdb',
      user: 'postgres',
      password: 'password'
    }
  },
  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'test-knextestdb',
      user: 'postgres',
      password: 'password'
    }
  },
};
