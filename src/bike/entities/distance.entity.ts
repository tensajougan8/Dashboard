import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Bike } from './bike.entity';

@Entity()
export class Distance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  to: string;

  @Column()
  from: string;

  @Column()
  totaldistanceTravelled: number;

  @CreateDateColumn()
  createdDate: Date;

  @ManyToOne((type) => Bike, (bike) => bike.id)
  bike: Bike;
}
