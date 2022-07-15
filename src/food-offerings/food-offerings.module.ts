/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FoodOfferingsResolver } from './food-offerings.resolver';

@Module({
  imports: [],
  controllers: [],
  providers: [FoodOfferingsResolver],
})
export class FoodOfferingsModule {}
