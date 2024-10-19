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
   * @throws Will throw an error if user.dailyCalories is not provided or invalid
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
    this.validateWeight(user)
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
    this.validateWeight(user)
    return this.estimateWeightChange(
      caloricSurplusOrDeficit,
      user,
      this.DAYS_IN_MONTH
    )
  }

  /**
   * @inheritdoc
   * @throws Will throw an error if user.weightGoal or user.weight is not provided or invalid
   */
  calculateEstimatedWeeksToWeightGoal(
    caloricSurplusOrDeficit: number,
    user: User
  ): number {
    this.validateWeightGoal(user)
    this.validateWeight(user)
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
   * @throws Will throw an error if user.weightGoal, user.weight, or user.weeksToWeightGoal is not provided or invalid
   */
  calculateCaloriesForWeightGoal(user: User, tdee: number): number {
    this.validateWeightGoal(user)
    this.validateWeight(user)
    this.validateWeeksToWeightGoal(user)

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
    if (
      user.dailyCalories === undefined ||
      typeof user.dailyCalories !== 'number' ||
      user.dailyCalories < 0
    ) {
      throw new Error('Valid dailyCalories is required for calorie calculation')
    }
  }

  private validateWeightGoal(
    user: User
  ): asserts user is User & { weightGoal: number } {
    if (
      user.weightGoal === undefined ||
      typeof user.weightGoal !== 'number' ||
      user.weightGoal <= 0
    ) {
      throw new Error(
        'Valid weightGoal is required for some calorie calculations'
      )
    }
  }

  private validateWeight(
    user: User
  ): asserts user is User & { weight: number } {
    if (
      user.weight === undefined ||
      typeof user.weight !== 'number' ||
      user.weight <= 0
    ) {
      throw new Error('Valid weight is required for some calorie calculations')
    }
  }

  private validateWeeksToWeightGoal(
    user: User
  ): asserts user is User & { weeksToWeightGoal: number } {
    if (
      user.weeksToWeightGoal === undefined ||
      typeof user.weeksToWeightGoal !== 'number' ||
      user.weeksToWeightGoal <= 0
    ) {
      throw new Error(
        'Valid weeksToWeightGoal is required for some calorie calculations'
      )
    }
  }

  private estimateWeightChange(
    caloricDifference: number,
    user: User & { weight: number },
    days: number
  ): number {
    const adjustedCaloriesPerKilo =
      this.CALORIES_PER_KILO * (user.weight / this.REFERENCE_WEIGHT)
    const calorieBalance = caloricDifference * days
    const estimatedWeightChange = calorieBalance / adjustedCaloriesPerKilo
    return estimatedWeightChange
  }
}
