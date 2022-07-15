import { FoodOffering } from './food-offerings/models/food-offering.model';

export function getOrmConfig(settings: IDatabaseSettings) {
    const entities = [FoodOffering];
    return {
           type: 'postgres',
           host: settings.host,
           port: settings.port,
           username: settings.username,
           password: settings.password,
           database: settings.database,
           entities,
           synchronize: true,
           logging: true,
       };
}

export class DatabaseModule {
 public static forRoot(settings: IDatabaseSettings): DynamicModule {
   const ormConfig = getOrmConfig(settings);
   return {
     module: DatabaseModule,
     imports: [
       TypeOrmModule.forRoot(ormConfig)
     ],
     components: [
       DatabaseService,
     ],
     exports: [
       DatabaseService
     ]
   };
 }
}