export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: IRole[];
}
export interface IRole {
  id: number;
  roleName: string;
}
