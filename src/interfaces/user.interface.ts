export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: IRole[];
  isActive: boolean;
}
export interface IRole {
  id: number;
  roleName: string;
}
