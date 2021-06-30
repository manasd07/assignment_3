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
    /**
     * Public accessible routes
     */
    app.get('/', async (req: Request, res: Response): Promise<unknown> => {
      return res.json({ message: 'GET request successfull' });
    });
    app.post('/users/signup', this.userController.addUser);
    app.post('/users/login', this.userController.loginUser);
    app.post('/users/verify-email', this.userController.verifyEmailAndSignUp);
    /**
     * Protected Routes
     */
    app.post(
      '/users/add-seller-role/:id',
      passport.authenticate('jwt', { session: false }),
      this.userController.addSellerRole
    );
    app.get('/customers', passport.authenticate('jwt', { session: false }), this.userController.getAllCustomers);
    app.get('/sellers', passport.authenticate('jwt', { session: false }), this.userController.getAllSellers);
    app.get('/users/list', passport.authenticate('jwt', { session: false }), this.userController.getAllUsers);
    app.put('/users/:id', passport.authenticate('jwt', { session: false }), this.userController.updateUser);
    app.get('/users/:id', passport.authenticate('jwt', { session: false }), this.userController.getUserById);
    app.delete('/users/:id', passport.authenticate('jwt', { session: false }), this.userController.deleteUser);
  }
}
export { Routes };
