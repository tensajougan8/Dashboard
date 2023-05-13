import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { AccessorialExpense } from "./accessorial.entity";
import { Distance } from "./distance.entity";
import { Fuel } from "./fuel.entity";
import { Servicing } from "./service.entity";

@Entity()
export class Bike {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bikeName: string;

  @Column()
  bikeDescription: string;

  @Column()
  bikeModel: string;

  @Column()
  bikeCost: number;

  @Column()
  bikeTotalFuel: number;

  @Column()
  bikeAvgMileage: number;

  @Column()
  bikeTotalFuelCost: number;

  @Column()
  bikeTotalDistance: number;

  @CreateDateColumn()
  updateDate: Date;

  @CreateDateColumn()
  createdDate: Date;

  @OneToMany((type) => Fuel, (fuel) => fuel.id)
  fuel: Fuel[];

  @OneToMany((type) => Distance, (distance) => distance.id)
  distance: Distance[];

  @OneToMany((type) => Servicing, (servicing) => servicing.id)
  servicing: Servicing[];

  @OneToMany(
    (type) => AccessorialExpense,
    (accessorialExpense) => accessorialExpense.id,
  )
  accessorialExpense: AccessorialExpense[];
}
