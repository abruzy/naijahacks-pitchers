const pg = require('pg');
const config = require('../config/');

const User = {};
const pool = new pg.Pool({
  user: config.db.user,
  host: config.db.host,
  port: config.db.port,
  password: config.db.password,
  database: config.db.database,
  idleTimeoutMillis: 30000,
  max: 10
});

User.saveUser = ({
  userName,
  userFullName,
  userPhone,
  userEmail,
  userAddress,
  userPassword,
  isAdmin
}) => {};

User.emailExists = email => {
  pool.query(
    'SELECT * FROM users WHERE user_email = $1',
    [email],
    (error, results) => {
      if (error) {
        return false;
      }
      if (results.rows.length > 0) return true;
      return false;
    }
  );
};
module.exports = User;
