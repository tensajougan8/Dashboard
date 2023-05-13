import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BikeService } from './bike.service';
import { CreateBikeAccessorialExpenseDto } from './dto/create-bike-accessorial-expenses.dto';
import { CreateBikeFuelDto } from './dto/create-bike-refuel.dto';
import { CreateBikeServicingDto } from './dto/create-bike-servicing.dto';
import { CreateBikeTripDto } from './dto/create-bike-trip.dto';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Controller('bike')
export class BikeController {
  constructor(private readonly bikeService: BikeService) {}

  /* ============= Bike Endpoints ============ */
  @Post()
  addBike(@Body() createBikeDto: CreateBikeDto) {
    return this.bikeService.createNewBike(createBikeDto);
  }

  // @Post('mileage')
  // initialMileage(@Body() createBikeDto: CreateBikeDto) {
  //   return this.bikeService.create(createBikeDto);
  // }

  /* ============= Distance Endpoints ============ */
  @Post('distance')
  addDistance(@Body() createBikeTripDto: CreateBikeTripDto) {
    return this.bikeService.addNewDistance(createBikeTripDto);
  }

  /* ============= Fuel Endpoints ============ */
  @Post('fuel')
  addFuel(@Body() createBikeFuelDto: CreateBikeFuelDto) {
    return this.bikeService.refuelTank(createBikeFuelDto);
  }

  /* ============= Servicing Endpoints ============ */
  @Post('servicing')
  bikeServicing(@Body() createBikeServicingDto: CreateBikeServicingDto) {
    return this.bikeService.addNewServicing(createBikeServicingDto);
  }

  /* ============= AccessorialExpense Endpoints ============ */
  @Post('other-expense')
  bikeAccessorialExpense(
    @Body() createBikeAccessorialExpenseDto: CreateBikeAccessorialExpenseDto,
  ) {
    return this.bikeService.newAccessorialExpense(
      createBikeAccessorialExpenseDto,
    );
  }

  @Get()
  findAll() {
    return this.bikeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return this.bikeService.update(+id, updateBikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikeService.remove(+id);
  }
}
