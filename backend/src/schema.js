const Joi = require('joi');

const userSchema = {
  body: {
    userFullName: Joi.string()
      .min(3)
      .max(100)
      .required(),
    userName: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    userEmail: Joi.string()
      .email()
      .required(),
    userPassword: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    userPhone: Joi.number(),
    userAddress: Joi.string(),
    isAdmin: Boolean
  }
};

module.exports = { userSchema };
