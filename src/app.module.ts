/* eslint-disable prettier/prettier */
import { FoodOfferingService } from './food-offerings/food-offeringservice.service';
import { FoodOfferingsModule } from './food-offerings/food-offerings.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppService } from './app.service';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoodOffering } from './food-offerings/models/food-offering.model';

@Module({
    imports: [
        FoodOfferingsModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            sortSchema: true,
        }),
    ],
    controllers: [],
    providers: [FoodOfferingService, AppService],
})
export class AppModule {
    static forRoot(settings: SaNuCoSettings): DynamicModule {
        return {
            module: AppModule,
            imports: [
                // This module has a ConfigurationService, which
                // does the same as described in the docs
                // but it does not read the env file.
                AppSettingsModule.forRoot(settings),
                DatabaseModule.forRoot(settings)
            ]
        };
    }
}