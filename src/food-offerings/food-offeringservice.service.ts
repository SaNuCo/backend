/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FoodOffering } from './models/food-offering.model';

@Injectable()
export class FoodOfferingService {
    constructor(
        @InjectRepository(FoodOffering)
        private foodOfferingRepository: Repository<FoodOffering>,
    ) {}

    async createFoodOffering(foodOffering: FoodOffering): Promise<FoodOffering> {
        return await this.foodOfferingRepository.save(foodOffering);
    }
}
