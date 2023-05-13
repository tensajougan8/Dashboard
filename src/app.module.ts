import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BikeModule } from './bike/bike.module';
import { AccessorialExpense } from './bike/entities/accessorial.entity';
import { Bike } from './bike/entities/bike.entity';
import { Distance } from './bike/entities/distance.entity';
import { Fuel } from './bike/entities/fuel.entity';
import { Servicing } from './bike/entities/service.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'host.docker.internal',
      port: 32769,
      username: 'postgres',
      password: 'postgrespw',
      database: 'postgres',
      entities: [Bike, Fuel, Distance, Servicing, AccessorialExpense],
      synchronize: true,
    }),
    BikeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
