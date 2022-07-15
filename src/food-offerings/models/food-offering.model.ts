/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType, Float } from '@nestjs/graphql';

@ObjectType({ description: 'food offering ' })
export class FoodOffering {
  
  constructor (id: string, title: string, location: number[], category: string) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.category = category;
}
  
  @Field((type) => ID, { description: 'food offering id' })
  id: string;
  @Field((type) => String, { description: 'food offering name' })
  title: string;
  @Field((type) => String, { description: 'food offering description' })
  picture: string;
  @Field((type) => [Float], { description: 'location of the food offering' })
  location: number[];
  @Field((type) => String, { description: 'food category' })
  category: string;
}
