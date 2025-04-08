import { Injectable } from '@nestjs/common';
import { CARS_SEED } from './data/cars.seed';
import { BRANS_SEED } from './data/brands.seed';


@Injectable()
export class SeedService {
  populateDB() {


    return 'Seed executed successfully';
  }
}
