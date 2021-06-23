import { IUser } from '../../interfaces/user.interface';
import * as Joi from 'joi';
export const validateUserRegistration = async (user: IUser) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(30).required(),

    lastName: Joi.string().min(3).max(30).required(),

    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required(),

    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    confirmPassword: Joi.ref('password'),
  });

  const result = await schema.validate(user);
  return result;
};
