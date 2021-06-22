import { Request, Response } from 'express';
// import { connection } from '../connection/connection';
class UserRepository {
  public async getAllCustomers(req: Request, res: Response): Promise<unknown> {
    return res.json({req,res});
  }
  public async addCustomer(req: Request, res: Response): Promise<unknown> {
    return res.json({req,res});
  }
  public async updateCustomer(req: Request, res: Response): Promise<unknown> {
    return res.json({req,res});
  }
  public async getCustomerById(req: Request, res: Response): Promise<unknown> {
    return res.json({req,res});
  }
  public async deleteCustomer(req: Request, res: Response): Promise<unknown> {
    return res.json({req,res});
  }
}
export { UserRepository };
