import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Seller } from './seller.entity';
import { Order } from './order.entity';
import { BaseEntity } from 'src/base/base.entity';

@Entity()
export class Product extends BaseEntity{
  @Column()
  name: string;

  @Column()
  price: Number;

  @ManyToOne((type)=>Seller,(seller)=>seller.products)
  seller: Seller;

  @ManyToMany((type)=>Order,(order)=>order.products)
  orders: Order [];
}
