const Scheme = require("./scheme-model");

/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  const { scheme_id } = res.body;

  if (!scheme_id) {
    res
      .status(400)
      .json({ message: `scheme with scheme_id ${scheme_id} not found` });
  } else {
    next();
  }
};

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const { instructions } = req.body;

  if (!instructions || typeof instructions != "string") {
    res.status(400).json({ message: `invalid scheme_name` });
  } else {
    next();
  }
};

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const { step_number } = req.body;
  if (!step_number || typeof step_number != "number") {
    res.status(400).json({ message: `invalid step` });
  } else {
    next();
  }
};

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
};
