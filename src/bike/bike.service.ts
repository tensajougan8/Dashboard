import { Inject, Injectable } from '@nestjs/common';
import { CreateBikeAccessorialExpenseDto } from './dto/create-bike-accessorial-expenses.dto';
import { CreateBikeFuelDto } from './dto/create-bike-refuel.dto';
import { CreateBikeServicingDto } from './dto/create-bike-servicing.dto';
import { CreateBikeTripDto } from './dto/create-bike-trip.dto';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { AccessorialExpenseRepository } from './repositories/accessorial.repository';
import { BikeRepository } from './repositories/bike.repository';
import { DistanceRepository } from './repositories/distance.repository';
import { FuelRepository } from './repositories/fuel.repository';
import { ServicingRepository } from './repositories/servicing.repository';

@Injectable()
export class BikeService {
  constructor(
    @Inject(BikeRepository)
    private readonly bikeRepository: BikeRepository,
    @Inject(DistanceRepository)
    private readonly distanceRepository: DistanceRepository,
    @Inject(FuelRepository)
    private readonly fuelRepository: FuelRepository,
    @Inject(ServicingRepository)
    private readonly servicingRepository: ServicingRepository,
    @Inject(AccessorialExpenseRepository)
    private readonly accessorialExpenseRepository: AccessorialExpenseRepository,
  ) {}

  /* ============= Bike Related Functions ============ */
  createNewBike(createBikeDto: CreateBikeDto) {
    return this.bikeRepository.createBike(createBikeDto);
  }

  // initialMileage(createBikeDto: CreateBikeDto) {
  //   return this.bikeService.create(createBikeDto);
  // }

  /* ============= Distance Related Functions ============ */
  addNewDistance(createBikeTripDto: CreateBikeTripDto) {
    return this.distanceRepository.addDistance(createBikeTripDto);
  }

  /* ============= Fuel Related Functions ============ */
  refuelTank(createBikeFuelDto: CreateBikeFuelDto) {
    return this.fuelRepository.addFuel(createBikeFuelDto);
  }

  /* ============= Servicing Related Functions ============ */
  addNewServicing(createBikeServicingDto: CreateBikeServicingDto) {
    return this.servicingRepository.addServicing(createBikeServicingDto);
  }

  /* ============= AccessorialExpense Related Functions ============ */
  newAccessorialExpense(
    createBikeAccessorialExpenseDto: CreateBikeAccessorialExpenseDto,
  ) {
    return this.accessorialExpenseRepository.createBikeAccessorialExpense(
      createBikeAccessorialExpenseDto,
    );
  }

  findAll() {
    return `This action returns all bike`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bike`;
  }

  update(id: number, updateBikeDto: UpdateBikeDto) {
    return `This action updates a #${id} bike`;
  }

  remove(id: number) {
    return `This action removes a #${id} bike`;
  }
}
