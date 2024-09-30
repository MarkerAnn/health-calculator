/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { InterfaceCalorieCalculator } from 'src/interfaces/InterfaceCalorieCalculator'
import { User } from 'src/models/User'

/**
 * Class representing a calorie calculator that provides various methods
 * to calculate caloric surplus/deficit and estimate weight changes based on calorie intake.
 * Implements the InterfaceCalorieCalculator interface.
 */
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
  calculateEstimateTimeToWeightGoal(
    caloricSurplusOrDeficit: number,
    user: User
  ): number {
    throw new Error('Method not implemented.')
  }
  calculateCaloriesForWeightGoal(goalWeight: number, weeks: number): number {
    throw new Error('Method not implemented.')
  }
}
