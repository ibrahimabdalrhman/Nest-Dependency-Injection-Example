import { Injectable } from '@nestjs/common';

@Injectable()
export class BatteryService {
  powerSupply() {
    return 'Battary is Working.';
  }
}
