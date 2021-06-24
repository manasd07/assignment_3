import { Request, Response } from 'express';
import { User } from '../entity/User';
import { Role } from '../entity/Role';
import connection from '../connection/connection';
import { validateUserRegistration } from '../utils/helpers/user-validator.helper';
import { Repository } from 'typeorm';

let userRepo: Repository<User>, roleRepo: Repository<Role>;
connection.then((conn) => {
  userRepo = conn.getRepository(User);
  roleRepo = conn.getRepository(Role);
});
export const userRepository = {
  getAllCustomers: async (req: Request, res: Response): Promise<unknown> => {
    try {
      const roles = await roleRepo.find({
        relations: ['users'],
      });
      const customers = roles[0].users;
      return res.json({ message: 'Successfull', data: customers });
    } catch (error) {
      return res.json({ message: 'Internal Server Exception', error });
    }
  },
  getAllSellers: async (req: Request, res: Response): Promise<unknown> => {
    try {
      const roles = await roleRepo.find({
        relations: ['users'],
      });
      const customers = roles[1].users;
      return res.json({ message: 'Successfull', data: customers });
    } catch (error) {
      return res.json({ message: 'Internal Server Exceptions', error });
    }
  },
  addCustomer: async (req: Request, res: Response): Promise<unknown> => {
    try {
      const user = req.body;
      const userValidation = await validateUserRegistration(user);
      if (userValidation.error) {
        return res.json({ message: 'Failed', error: userValidation.error.details });
      }
      const customerRole = await roleRepo.findOne({ where: { roleName: 'Customer' } });
      const { firstName, lastName, email, password } = req.body;
      const customer = new User();
      customer.firstName = firstName;
      customer.lastName = lastName;
      customer.email = email;
      customer.password = password;
      customer.roles = [customerRole];
      const saveResult = await userRepo.save(customer);
      return res.json({ message: 'Successfully saved !', data: saveResult });
    } catch (error) {
      return res.json({ message: 'Failure', error: error });
    }
  },
  addSeller: async (req: Request, res: Response): Promise<unknown> => {
    try {
      const user = req.body;
      const userValidation = await validateUserRegistration(user);
      if (userValidation.error) {
        return res.json({ message: 'Failed', error: userValidation.error.details });
      }
      const sellerRole = await roleRepo.findOne({ where: { roleName: 'Seller' } });
      const { firstName, lastName, email, password } = req.body;
      const seller = new User();
      seller.firstName = firstName;
      seller.lastName = lastName;
      seller.email = email;
      seller.password = password;
      seller.roles = [sellerRole];
      const saveResult = await userRepo.save(seller);
      return res.json({ message: 'Successfully saved !', data: saveResult });
    } catch (error) {
      return res.json({ message: 'Failure', error: error });
    }
  },
  updateUser: async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ message: 'Update customer API' });
  },
  getUserById: async (req: Request, res: Response): Promise<unknown> => {
    try {
      try {
        if (!req.params.id) {
          return res.json({ message: 'Bad Request', error: 'Enter id to search' });
        }
        const user = await userRepo.findOneOrFail(req.params.id,{
          relations:["roles"]
        });
        return res.json({ message: 'Success', data: user });
      } catch (error) {}
    } catch (error) {}
  },
  deleteUser: async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ message: 'Delete Customer API' });
  },
};
