/* eslint-disable prettier/prettier */
import { Field, ID, ObjectType, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType({ description: 'food offering ' })
export class FoodOffering {
  
  constructor (id: string, title: string, location: number[], category: string, picture?: string) {
    this.id = id;
    this.title = title;
    this.location = location;
    this.category = category;
    this.picture = picture;
  }
  
  @PrimaryGeneratedColumn()
  @Field((type) => ID, { description: 'food offering id' })
  id: string;
  @Column()
  @Field((type) => String, { description: 'food offering name' })
  title: string;
  @Column({ nullable: true })
  @Field((type) => String, { description: 'food offering description' })
  picture: string;
  @Column('float', {array: true})
  @Field((type) => [Float], { description: 'location of the food offering' })
  location: number[];
  @Column()
  @Field((type) => String, { description: 'food category' })
  category: string;
}
