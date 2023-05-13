import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateBikeTripDto } from '../dto/create-bike-trip.dto';
import { Distance } from '../entities/distance.entity';

@Injectable()
export class DistanceRepository extends Repository<Distance> {
  constructor(private dataSource: DataSource) {
    super(Distance, dataSource.createEntityManager());
  }
  async addDistance(createBikeTripDto: CreateBikeTripDto): Promise<Distance> {
    return this.save(createBikeTripDto);
  }
}
