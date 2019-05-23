// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: { user: 'postgres', database: 'booky_db' },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
  production: { 
    client: 'pg', 
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds/production',
    },
  }
};