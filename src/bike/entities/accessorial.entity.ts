import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Bike } from './bike.entity';

@Entity()
export class AccessorialExpense {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cost: number;

  @Column()
  description: string;

  @Column()
  bikeTotalDistance: number;

  @CreateDateColumn()
  createdDate: Date;

  @ManyToOne((type) => Bike, (bike) => bike.id)
  bike: Bike;
}
