/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Args, Float, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { FoodOffering } from './models/food-offering.model';

export class FoodOfferingsResolver {
  constructor() {}

  @Query(returns => [FoodOffering])
  async foodOfferings(@Args({name: 'location', type: () => [Float]}) location: number[]): Promise<FoodOffering[]> {
    const offerings : FoodOffering[] = new Array<FoodOffering>();
    offerings.push(new FoodOffering(
        '1',
        'Food Offering 1',
        [1, 2, 3],
        'Food Category 1'
    ));
    offerings.push(new FoodOffering(
        '2',
        'Food Offering 2',
        [1, 2, 3],
        'Food Category 1'
    ));
    offerings.push(new FoodOffering(
        '3',
        'Food Offering 3',
        [1, 2, 3],
        'Food Category 2'
    ));
    console.log(offerings);
    return offerings;
  }
}