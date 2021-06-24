import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../entity/User';
@Entity({ name: 'roles' })
export class Role {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: 'role_name', unique: true })
  public roleName: string;

  @ManyToMany(() => User, (user) => user.roles)
  users: User[];
}
export default Role;
