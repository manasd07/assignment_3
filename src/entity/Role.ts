import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity({ name: "roles" })
export class Role {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ name: "role_name" })
  public roleName: string;
}
