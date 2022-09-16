import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, } from 'typeorm';

@Entity()
export class User extends BaseEntity{

@PrimaryGeneratedColumn('uuid')
  id: string;

@Column({ length:255, })
  email: string;

@Column({
  length: 60,
})
  pwdHash: string;

@Column({
  type: 'uuid',
  default: null,
  length: 36,
})
  currentTokenId: string | null;
   
@Column({ type: 'tinyint',
  default: false, })
  isActive: boolean;

@Column()
  role: string;
  
@Column({ length:36, })
  createdBy: string | null;

@CreateDateColumn()
  createdAt: Date;
   
@UpdateDateColumn()
  updatedAt: Date;
}