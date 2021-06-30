import { Request, Response, Application } from 'express';
import { UserController } from '../controller/user.controller';
import passport from 'passport';
import '../auth/passportHandler';
class Routes {
  private userController: UserController;

  constructor() {
    this.userController = new UserController();
  }
  public routes(app: Application): void {
    app.get('/', async (req: Request, res: Response): Promise<unknown> => {
      return res.json({ message: 'GET request successfull' });
    });
    app.post('/users/signup', this.userController.addCustomer);
    app.post('/users/add-seller-role/:id', this.userController.addSellerRole);
    app.get('/customers', this.userController.getAllCustomers);
    app.get('/sellers', this.userController.getAllSellers);
    app.get('/users/list', passport.authenticate('jwt', { session: false }), this.userController.getAllUsers);
    app.post('/users/login', this.userController.loginUser);
    app.get('/users/:id', this.userController.getUserById);
  }
}
export { Routes };
