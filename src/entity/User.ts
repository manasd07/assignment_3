import { BeforeInsert, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from './Role';
const BCRYPT_HASH_ROUND = process.env.BCRYPT_HASH_ROUND || 8;
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public firstName: string;
  @Column()
  public lastName: string;
  @Column({ unique: true })
  public email: string;
  @Column()
  public password: string;
  @BeforeInsert()
  async beforeInsert(): Promise<void> {
    this.password = await bcrypt.hash(this.password, BCRYPT_HASH_ROUND);
  }
  /**
   * Relation with Roles
   */
  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];
}
export default User;
