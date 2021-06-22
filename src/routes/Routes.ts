import { Request, Response, Application } from 'express';
import { UserController } from '../controller/user.controller';
class Routes {
  private userController: UserController;
  constructor() {
    this.userController = new UserController();
  }
  public routes(app: Application): void {
    app.get('/', async (req: Request, res: Response): Promise<unknown> => {
      return res.json({ message: 'GET request successfull' });
    });
    app.get('/customer/signup', this.userController.addCustomer);
  }
}
export { Routes };
