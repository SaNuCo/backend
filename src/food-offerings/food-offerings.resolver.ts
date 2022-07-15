/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { FoodOffering } from './models/food-offering.model';

export class FoodOfferingsResolver {
  constructor() {}

  @Query(returns => FoodOffering)
  async foodOfferings(@Args('location') location: number[]): Promise<FoodOffering[]> {
    return null;
  }
}