import { Request, Response } from "express";
import { connection } from "../connection/connection";

import User from "../entity/User";
class UserController {
  public getAllCustomers(req: Request, res: Response) {
    connection
      .then(async (conn) => {
        return res.json({ message: "Customer Get Request", details: conn });
      })
      .catch((error) => {
        res.json(error);
      });
  }
  public addCustomer(req: Request, res: Response) {
    connection
      .then(async (conn) => {
        res.json({ message: "Successfully Saved." });
      })
      .catch((error) => {
        // console.error("Error ", error);
        res.json(error);
      });
  }
  public updateCustomer(req: Request, res: Response) {
    connection
      .then(async (conn) => {
        res.json({ message: "Successfully Updated." });
      })
      .catch((error) => {
        res.json(error);
      });
  }
  public getCustomerById(req: Request, res: Response) {
    connection
      .then(async (conn) => {
        res.json("Get Customer By Id");
      })
      .catch((error) => {
        res.json(error);
      });
  }
  public deleteCustomer(req: Request, res: Response) {
    connection
      .then(async (conn) => {
        res.json({ message: "Successfully Removed." });
      })
      .catch((error) => {
        res.json(error);
      });
  }
}
export { UserController };
