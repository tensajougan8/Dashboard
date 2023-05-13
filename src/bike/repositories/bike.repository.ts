import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateBikeDto } from '../dto/create-bike.dto';
import { Bike } from '../entities/bike.entity';
 
@Injectable()
export class BikeRepository extends Repository<Bike> {
  constructor(private dataSource: DataSource) {
    super(Bike, dataSource.createEntityManager());
  }
  async createBike(createBikeDto: CreateBikeDto): Promise<Bike> {
    console.log(createBikeDto);
    return this.save(createBikeDto);
  }
}