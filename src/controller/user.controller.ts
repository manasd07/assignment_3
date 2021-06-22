import { Request, Response } from 'express';
import { UserRepository } from '../repository/user.repository';
class UserController {
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }
  public async getAllCustomers(req: Request, res: Response): Promise<unknown> {
    return res.json({ message: 'Customer Get Request' });
  }
  public async addCustomer(req: Request, res: Response): Promise<unknown> {
    return res.json({ message: 'Successfully Saved.' });
  }
  public async updateCustomer(req: Request, res: Response): Promise<unknown> {
    return res.json({ message: 'Successfully Updated.' });
  }
  public async getCustomerById(req: Request, res: Response): Promise<unknown> {
    return res.json('Get Customer By Id');
  }
  public async deleteCustomer(req: Request, res: Response): Promise<unknown> {
    return res.json({ message: 'Successfully Removed.' });
  }
}
asds;
export { UserController };
