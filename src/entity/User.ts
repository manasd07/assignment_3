import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public firstName: string;
  @Column()
  public lastName: string;
}
export default User;
