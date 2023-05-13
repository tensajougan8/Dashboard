import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateBikeDto {
  @IsString()
  @IsNotEmpty()
  bikeName: string;

  bikeDescription: string;
 
  bikeModel: string;

  bikeCost: number;

  bikeTotalFuel: number;

  bikeAvgMileage: number;
 
  bikeTotalFuelCost: number;

  bikeTotalDistance: number;

  updateDate: Date;
}
