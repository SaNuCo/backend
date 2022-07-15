/* eslint-disable prettier/prettier */
import { FoodOfferingService } from './food-offerings/food-offeringservice.service';
import { FoodOfferingsModule } from './food-offerings/food-offerings.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        FoodOfferingsModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5433,
            username: 'postgres',
            password: 'postgres',
            database: 'postgres',
            entities: [],
            synchronize: true,
        }),
    ],
    controllers: [],
    providers: [FoodOfferingService, AppService],
})
export class AppModule {}
