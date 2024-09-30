/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from 'src/models/User'

/**
 * Interface to calculate various metrics based on calories and individual weight goals.
 */
export interface InterfaceCalorieCalculator {
  /**
   * Calculates the daily caloric surplus or deficit based on daily caloric intake.
   * @param user - The user object containing daily calories intake
   * @param tdee - the Total Daily Energy Expenditure (TDEE) using the Harris-Benedict equation
   * @returns {number} The caloric surplus or deficit.
   */
  calculateCaloricSurplusOrDeficit(user: User, tdee: number): number

  /**
   * Calculates the estimated weekly weight change based on calorie surplus or calorie deficit
   *
   * @param caloricSurplusOrDeficit
   * @param user - The User object containing the user's weight
   * @returns The estimated weight change each week, in kilo, minus value means losing weight
   */
  calculateEstimatedWeightChangeWeekly(
    caloricSurplusOrDeficit: number,
    user: User
  ): number

  /**
   * Calculates the estimated monthly weight change based on calorie surplus or calorie deficit
   *
   * @param caloricSurplusOrDeficit
   * @param user - The User object containing the user's weight
   * @returns The estimated weight change each month, in kilo, minus value means losing weight
   */
  calculateEstimatedWeightChangeMonthly(
    caloricSurplusOrDeficit: number,
    user: User
  ): number

  /**
   * Calculates the estimated time in weeks to reach a specific weigh goal, based on daily caloric intake and weight goal
   * @param caloricSurplusOrDeficit
   * @param user - The user object containing weight goal
   * @returns Estimated number of weeks it will take to reach certain weigh goal. The result is rounded up to whole weeks
   */
  calculateEstimatedWeeksToWeightGoal(
    caloricSurplusOrDeficit: number,
    user: User
  ): number

  /**
   * Calculates the estimated daily calorie intake to reach a specific weigh goal, based on goal weight and time in weeks
   * @param user - The user object containing weight goal and weeks to reach that goal
   * @returns A positive number representing the daily caloric surplus or deficit required to reach the weight goal, depending on whether the user aims to gain or lose weight.
   */
  calculateCaloriesForWeightGoal(user: User): number
}
