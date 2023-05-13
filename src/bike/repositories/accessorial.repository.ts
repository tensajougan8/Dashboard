import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { CreateBikeAccessorialExpenseDto } from '../dto/create-bike-accessorial-expenses.dto';
import { CreateBikeDto } from '../dto/create-bike.dto';
import { AccessorialExpense } from '../entities/accessorial.entity';
import { Bike } from '../entities/bike.entity';

@Injectable()
export class AccessorialExpenseRepository extends Repository<AccessorialExpense> {
  constructor(private dataSource: DataSource) {
    super(AccessorialExpense, dataSource.createEntityManager());
  }
  async createBikeAccessorialExpense(
    createBikeAccessorialExpenseDto: CreateBikeAccessorialExpenseDto,
  ): Promise<AccessorialExpense> {
    return this.save(createBikeAccessorialExpenseDto);
  }
}
