import { Request, Response } from 'express';
import { User } from '../entity/User';
import connection from '../connection/connection';
import { validateUserRegistration } from '../utils/helpers/user-validator.helper';

let userRepo;
connection.then((conn) => {
  userRepo = conn.getRepository(User);
});
export const userRepository = {
  getAllCustomers: async (req: Request, res: Response): Promise<unknown> => {
    const users = await userRepo.find();
    return res.json({ message: 'Successfull', data: users });
  },
  addCustomer: async (req: Request, res: Response): Promise<unknown> => {
    try {
      const user = req.body;
      const userValidation = await validateUserRegistration(user);
      if (userValidation.error) {
        return res.json({ message: 'Failed', error: userValidation.error.details });
      } else {
        const { firstName, lastName, email, password } = req.body;
        const newUser = new User();
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.email = email;
        newUser.password = password;
        await userRepo.save(newUser);
        return res.json({ message: 'Success', data: newUser });
      }
    } catch (error) {
      return res.json({ message: 'Failed', error: error });
    }
  },
  updateCustomer: async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ message: 'Update customer API' });
  },
  getCustomerById: async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ message: 'Get Customer By Id API' });
  },
  deleteCustomer: async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ message: 'Delete Customer API' });
  },
};
