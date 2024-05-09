import { Injectable } from '@nestjs/common';
import { EngineService } from 'src/engine/engine.service';

@Injectable()
export class ConditionerService {
  constructor(private readonly engineService: EngineService) {}
  on() {
    return `${this.engineService.startEngine()}
    Conditioner is Working... 
    `;
  }
}
