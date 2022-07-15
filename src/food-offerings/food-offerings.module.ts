/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodOfferingsResolver } from './food-offerings.resolver';
import { FoodOfferingService } from './food-offeringservice.service';
import { FoodOffering } from './models/food-offering.model';

@Module({
    imports: [TypeOrmModule.forFeature([FoodOffering])],
    exports: [TypeOrmModule],
    controllers: [],
    providers: [FoodOfferingService, FoodOfferingsResolver],
})
export class FoodOfferingsModule {}
