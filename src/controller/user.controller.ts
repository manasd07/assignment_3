import { Request, Response } from 'express';
import { userRepository } from '../repository/user.repository';
class UserController {
  public async getAllCustomers(req: Request, res: Response): Promise<unknown> {
    return await userRepository.getAllCustomers(req, res);
  }
  public async getAllSellers(req: Request, res: Response): Promise<unknown> {
    return await userRepository.getAllSellers(req, res);
  }
  public async getAllUsers(req: Request, res: Response): Promise<unknown> {
    return await userRepository.getAllUsers(req, res);
  }
  public async verifyEmailAndSignUp(req: Request, res: Response): Promise<unknown> {
    return await userRepository.verifyEmailAndSignUp(req, res);
  }
  public async addUser(req: Request, res: Response): Promise<unknown> {
    return await userRepository.addUser(req, res);
  }
  public async loginUser(req: Request, res: Response): Promise<unknown> {
    return await userRepository.loginUser(req, res);
  }
  public async addSellerRole(req: Request, res: Response): Promise<unknown> {
    return await userRepository.addSellerRoleToCustomer(req, res);
  }
  public async updateUser(req: Request, res: Response): Promise<unknown> {
    return await userRepository.updateUser(req, res);
  }
  public async getUserById(req: Request, res: Response): Promise<unknown> {
    return await userRepository.getUserById(req, res);
  }
  public async deleteUser(req: Request, res: Response): Promise<unknown> {
    return await userRepository.deleteUser(req, res);
  }
}
export { UserController };
