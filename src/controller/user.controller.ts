import { Request, Response } from 'express';
import { userRepository } from '../repository/user.repository';
class UserController {
  public async getAllCustomers(req: Request, res: Response): Promise<unknown> {
    return await userRepository.getAllCustomers(req, res);
  }
  public async getAllSellers(req: Request, res: Response): Promise<unknown> {
    return await userRepository.getAllSellers(req, res);
  }
  public async addCustomer(req: Request, res: Response): Promise<unknown> {
    return await userRepository.addCustomer(req, res);
  }
  public async addSeller(req: Request, res: Response): Promise<unknown> {
    return await userRepository.addSeller(req, res);
  }
  public async updateUser(req: Request, res: Response): Promise<unknown> {
    return await userRepository.updateUser(req, res);
  }
  public async getUserById(req: Request, res: Response): Promise<unknown> {
    return await userRepository.getUserById(req, res);
  }
  public async deleteUser(req: Request, res: Response): Promise<unknown> {
    return res.json({ message: 'Successfully Removed.' });
  }
}
export { UserController };
