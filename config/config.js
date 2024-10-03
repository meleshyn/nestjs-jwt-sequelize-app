require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env' : '.env.development',
});

module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
  },
};
