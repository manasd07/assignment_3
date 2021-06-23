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
    app.post('/customer/signup', this.userController.addCustomer);
    app.get('/customer/update/:id',this.userController.updateCustomer);
    app.get('/customer', this.userController.getAllCustomers);
    app.get('/customer/signout');
  }
}
export { Routes };
