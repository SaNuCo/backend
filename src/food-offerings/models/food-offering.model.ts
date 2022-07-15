/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType, Float } from '@nestjs/graphql';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType({ description: 'food offering ' })
export class FoodOffering {
  
  constructor (id: string, title: string, location: number[], category: string) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.category = category;
  }
  
  @PrimaryGeneratedColumn()
  @Field((type) => ID, { description: 'food offering id' })
  id: string;
  @Column()
  @Field((type) => String, { description: 'food offering name' })
  title: string;
  @Column()
  @Field((type) => String, { description: 'food offering description' })
  picture: string;
  @Column()
  @Field((type) => [Float], { description: 'location of the food offering' })
  location: number[];
  @Column()
  @Field((type) => String, { description: 'food category' })
  category: string;
}
