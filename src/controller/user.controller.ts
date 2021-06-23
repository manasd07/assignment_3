import { Request, Response } from 'express';
import { userRepository } from '../repository/user.repository';
class UserController {
  public async getAllCustomers(req: Request, res: Response): Promise<unknown> {
    return await userRepository.getAllCustomers(req, res);
  }
  public async addCustomer(req: Request, res: Response): Promise<unknown> {
    return await userRepository.addCustomer(req, res);
  }
  public async updateCustomer(req: Request, res: Response): Promise<unknown> {
    return await userRepository.updateCustomer(req, res);
  }
  public async getCustomerById(req: Request, res: Response): Promise<unknown> {
    return res.json('Get Customer By Id');
  }
  public async deleteCustomer(req: Request, res: Response): Promise<unknown> {
    return res.json({ message: 'Successfully Removed.' });
  }
}
export { UserController };
