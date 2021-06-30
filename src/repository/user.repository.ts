import { Request, Response } from 'express';
import { User } from '../entity/User';
import { Role } from '../entity/Role';
import connection from '../connection/connection';
import { validateUserRegistration, validateUserLogin } from '../utils/helpers/user-validator.helper';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';
import { signJwt } from '../utils/helpers/jwt-helper';
import { JWT_SECRET } from '../utils/secrets';
import * as jwt from 'jsonwebtoken';

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
  loginUser: async (req: Request, res: Response): Promise<unknown> => {
    try {
      const user = req.body;
      const userValidation = await validateUserLogin(user);
      if (userValidation.error) {
        return res.status(400).json({ message: 'Failed', error: userValidation.error.details });
      }
      const { email, password } = user;
      const userFromDb = await userRepo.findOneOrFail({ email });
      const isMatch = await bcrypt.compare(password, userFromDb.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Failed', error: 'Invalid Credentials' });
      }
      const token = signJwt({id:userFromDb.id,email:userFromDb.email}, JWT_SECRET, 3600);
      return res.status(200).json({
        message: 'Success',
        data: {
          token: token,
          user: {
            id: user.id,
            email: user.email,
          },
        },
      });
    } catch (error) {
      return res.status(500).json({ message: 'Internal Server Error', error });
    }
  },
  addSellerRoleToCustomer: async (req: Request, res: Response): Promise<unknown> => {
    const userId = req.params.id;

    const user = await userRepo.findOne(userId);
    const roles = await roleRepo.find();
    user.roles = roles;
    const updateResponse = await userRepo.save(user);
    if (!user) {
      return res.status(401).json({ message: 'User with this id does not exist' });
    }
    return res.json({ message: 'Successfully updated', data: updateResponse });
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
  getAllUsers: async (req: Request, res: Response): Promise<unknown> => {
    try {
      const users = await userRepo.find();
      return res.json({ message: 'Successfull', usersList: users });
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
        const user = await userRepo.findOneOrFail(req.params.id, {
          relations: ['roles'],
        });
        return res.json({ message: 'Success', data: user });
      } catch (error) {}
    } catch (error) {}
  },
  deleteUser: async (req: Request, res: Response): Promise<unknown> => {
    return res.json({ message: 'Delete Customer API' });
  },
};
