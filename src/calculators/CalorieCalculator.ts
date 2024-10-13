/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { InterfaceCalorieCalculator } from 'src/interfaces/InterfaceCalorieCalculator.js'
import { User } from 'src/models/User.js'

/**
 * Class representing a calorie calculator that provides various methods
 * to calculate caloric surplus/deficit and estimate weight changes based on calorie intake.
 * Implements the InterfaceCalorieCalculator interface.
 */
export class CalorieCalculator implements InterfaceCalorieCalculator {
  private DAYS_IN_WEEK = 7
  private DAYS_IN_MONTH = 30
  private CALORIES_PER_KILO = 7700
  private REFERENCE_WEIGHT = 70

  /**
   * @inheritdoc
   * @throws Will throw an error if user.dailyCalories is not provided
   */
  calculateCaloricSurplusOrDeficit(user: User, tdee: number): number {
    this.validateDailyCalories(user)
    const caloriesDifference = tdee - user.dailyCalories
    return caloriesDifference
  }

  /**
   * @inheritdoc
   */
  calculateEstimatedWeightChangeWeekly(
    caloricSurplusOrDeficit: number,
    user: User
  ): number {
    return this.estimateWeightChange(
      caloricSurplusOrDeficit,
      user,
      this.DAYS_IN_WEEK
    )
  }

  /**
   * @inheritdoc
   */
  calculateEstimatedWeightChangeMonthly(
    caloricSurplusOrDeficit: number,
    user: User
  ): number {
    return this.estimateWeightChange(
      caloricSurplusOrDeficit,
      user,
      this.DAYS_IN_MONTH
    )
  }

  /**
   * @inheritdoc
   * @throws Will throw an error if user.weightGoal is not provided
   */
  calculateEstimatedWeeksToWeightGoal(
    caloricSurplusOrDeficit: number,
    user: User
  ): number {
    this.validateWeightGoal(user)
    const weeklyWeightChange = this.estimateWeightChange(
      caloricSurplusOrDeficit,
      user,
      this.DAYS_IN_WEEK
    )
    const kilosToChange = user.weightGoal - user.weight
    const absoluteWeightDifference = Math.abs(kilosToChange)

    const estimatedWeekToGoal =
      absoluteWeightDifference / Math.abs(weeklyWeightChange)

    return Math.ceil(estimatedWeekToGoal)
  }

  /**
   * @inheritdoc
   * @throws Will throw an error if user.weighGoal or user.weeksToWeightGoal is not provided
   */
  calculateCaloriesForWeightGoal(user: User, tdee: number): number {
    this.validateWeightGoal(user)
    this.validateWeeksInUser(user)

    const kilosToChange = user.weightGoal - user.weight
    const absoluteKilosToChange = Math.abs(kilosToChange)
    const weeklyweightChange = absoluteKilosToChange / user.weeksToWeightGoal
    const dailyCalorieAdjustment =
      (weeklyweightChange * this.CALORIES_PER_KILO) / this.DAYS_IN_WEEK

    const dailyCalorieForGoal =
      kilosToChange > 0
        ? Math.round(tdee + dailyCalorieAdjustment)
        : Math.round(tdee - dailyCalorieAdjustment)
    return dailyCalorieForGoal
  }

  private validateDailyCalories(
    user: User
  ): asserts user is User & { dailyCalories: number } {
    if (!user.dailyCalories) {
      throw new Error('dailyCalories is required for calorie calculation')
    }
  }

  private validateWeightGoal(
    user: User
  ): asserts user is User & { weightGoal: number } {
    if (!user.weightGoal) {
      throw new Error('weightGoal is required for some calories calculation')
    }
  }

  private validateWeeksInUser(
    user: User
  ): asserts user is User & { weeksToWeightGoal: number } {
    if (!user.weeksToWeightGoal) {
      throw new Error(
        'weeksToWeightGoal is required for some calories calculation'
      )
    }
  }

  private estimateWeightChange(
    caloricDifference: number,
    user: User,
    days: number
  ): number {
    const adjustedCaloriesPerKilo =
      this.CALORIES_PER_KILO * (user.weight / this.REFERENCE_WEIGHT)
    const calorieBalance = caloricDifference * days
    const estimatedWeightChange = calorieBalance / adjustedCaloriesPerKilo
    return estimatedWeightChange
  }
}
