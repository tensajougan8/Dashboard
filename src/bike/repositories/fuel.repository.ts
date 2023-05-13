import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateBikeFuelDto } from '../dto/create-bike-refuel.dto';
import { CreateBikeTripDto } from '../dto/create-bike-trip.dto';
import { Fuel } from '../entities/fuel.entity';

@Injectable()
export class FuelRepository extends Repository<Fuel> {
  constructor(private dataSource: DataSource) {
    super(Fuel, dataSource.createEntityManager());
  }
  async addFuel(createBikeFuelDto: CreateBikeFuelDto): Promise<Fuel> {
    return this.save(createBikeFuelDto);
  }
}
