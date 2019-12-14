const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config/');

module.exports.createUser = (req, res) => {
  const userData = req.body;

  // Verify is user email exists already
  const User = require('../../models/User');
  if (User.emailExists(userData.userEmail))
    return res
      .status(400)
      .json({ message: 'Email already exists', status: 400 });

  const result = User.saveUser(userData);
  return res.status(200).end();
};
