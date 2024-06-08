const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().required(),
  userID: Joi.string().required(),
  userIP: Joi.string().optional(),
  isAdmin: Joi.bool().optional(),
  isBanned: Joi.bool().optional(),
});

const validateUser = ({ body }, res, next) => {
  const { error } = userSchema.validate(body);
  if (error) {
    console.log(error);
    return res.json(error.details[0].message);
  }
  next();
};

module.exports = {
  validateUser,
};
