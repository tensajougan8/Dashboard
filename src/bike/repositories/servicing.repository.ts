import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateBikeServicingDto } from '../dto/create-bike-servicing.dto';
import { CreateBikeTripDto } from '../dto/create-bike-trip.dto';
import { Servicing } from '../entities/service.entity';

@Injectable()
export class ServicingRepository extends Repository<Servicing> {
  constructor(private dataSource: DataSource) {
    super(Servicing, dataSource.createEntityManager());
  }
  async addServicing(
    createBikeServicingDto: CreateBikeServicingDto,
  ): Promise<Servicing> {
    return this.save(createBikeServicingDto);
  }
}
