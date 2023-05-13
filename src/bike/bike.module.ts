import { Module } from '@nestjs/common';
import { BikeService } from './bike.service';
import { BikeController } from './bike.controller';
import { Bike } from './entities/bike.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeRepository } from './repositories/bike.repository';
import { DistanceRepository } from './repositories/distance.repository';
import { AccessorialExpenseRepository } from './repositories/accessorial.repository';
import { FuelRepository } from './repositories/fuel.repository';
import { ServicingRepository } from './repositories/servicing.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Bike])],
  controllers: [BikeController],
  providers: [BikeService, BikeRepository,DistanceRepository, FuelRepository, ServicingRepository, AccessorialExpenseRepository],
})
export class BikeModule {}
