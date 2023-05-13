import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Bike } from './bike.entity';

@Entity()
export class Fuel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cost: number;

  @Column()
  fuel: number;

  @CreateDateColumn()
  createdDate: Date;

  @ManyToOne((type) => Bike, (bike) => bike.id)
  bike: Bike;
}
