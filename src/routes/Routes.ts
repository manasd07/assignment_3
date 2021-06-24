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
    app.post('/seller/signup', this.userController.addSeller);
    app.post('/customer/signup',this.userController.addCustomer);
    app.get('/customers', this.userController.getAllCustomers);
    app.get('/sellers',this.userController.getAllSellers);
    app.get('/user/:id',this.userController.getUserById);
    app.post('/user/login');
  }
}
export { Routes };
