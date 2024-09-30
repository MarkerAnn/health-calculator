/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

/**
 * Interface to calculate various metrics based on calories and individual weight goals.
 */
export interface InterfaceCalorieCalculator {
  /**
   * Calculates the caloric surplus or deficit based on daily caloric intake.
   * @param dailyCalories - The daily caloric intake goal.
   * @param tdee - the Total Daily Energy Expenditure (TDEE) using the Harris-Benedict equation
   * @returns {number} The caloric surplus or deficit.
   */
  calculateCaloricSurplusOrDeficit(dailyCalories: number, tdee: number): number

  /**
   * Calculates the estimated weekly weight change based on calorie surplus or calorie deficit
   *
   * @param caloricSurplusOrDeficit
   * @returns The estimated weight change each week, in kilo
   */
  calculateEstimatedWeightChangeWeekly(caloricSurplusOrDeficit: number): number

  /**
   * Calculates the estimated monthly weight change based on calorie surplus or calorie deficit
   *
   * @param caloricSurplusOrDeficit
   * @returns The estimated weight change each month, in kilo
   */
  calculateEstimatedWeightChangeMonthly(caloricSurplusOrDeficit: number): number

  /**
   * Calculates the estimated time in weeks to reach a specific weigh goal, based on daily caloric intake and weight goal
   * @param caloricSurplusOrDeficit
   * @param weightGoal
   */
  calculateEstimateTimeToWeightGoal(
    caloricSurplusOrDeficit: number,
    weightGoal: number
  ): number

  /**
   * Calculates the estimated daily calorie intake to reach a specific weigh goal, based on goal weight and time in weeks
   * @param goalWeight
   * @param weeks
   */
  calculateCaloriesForWeightGoal(goalWeight: number, weeks: number): number
}
// TODO: Docs
