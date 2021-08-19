import Joi from 'joi';

const schemeTest = Joi.object({
  semester: Joi.string().min(1).required(),
  category: Joi.string().min(1).required(),
  discipline: Joi.string().min(1).required(),
  professor: Joi.string().min(1).required(),
  pdf: Joi.string().uri(),
});

export { schemeTest };
