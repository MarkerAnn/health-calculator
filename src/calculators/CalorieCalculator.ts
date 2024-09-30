/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User'
import { InterfaceCalorieCalculator } from 'src/interfaces/InterfaceCalorieCalculator'

export class CalorieCalculator implements InterfaceCalorieCalculator {
  calculateCaloricSurplusOrDeficit(user: User, tdee: number): number {
    throw new Error('Method not implemented.')
  }
  calculateEstimatedWeightChangeWeekly(
    caloricSurplusOrDeficit: number
  ): number {
    throw new Error('Method not implemented.')
  }
  calculateEstimatedWeightChangeMonthly(
    caloricSurplusOrDeficit: number
  ): number {
    throw new Error('Method not implemented.')
  }
  calculateEstimateTimeToWeightGoal(user: User): number {
    throw new Error('Method not implemented.')
  }
  calculateCaloriesForWeightGoal(user: User): number {
    throw new Error('Method not implemented.')
  }
}
