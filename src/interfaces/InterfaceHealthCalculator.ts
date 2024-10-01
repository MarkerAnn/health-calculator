/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

/**
 * Interface representing a health calculator with various health-related metrics.
 */
export interface InterfaceHealthCalculator {
  /**
   * Calculates the Body Mass Index (BMI).
   * @returns {number} The BMI value.
   */
  getBmi(): number

  /**
   * Determines the BMI type/category.
   * @returns {string} The BMI type as a string.
   */
  getBmiType(): string

  /**
   * Calculates the BMI Prime.
   * @returns {number} The BMI Prime value.
   */
  getBmiPrime(): number

  /**
   * Calculates the ideal weight range.
   * @returns {[number, number]} A tuple containing the minimum and maximum ideal weight.
   */
  getIdealWeight(): [number, number]

  /**
   * Calculates the Waist-to-Hip Ratio (WHR).
   * @returns {number} The WHR value.
   */
  getWaistToHipRatio(): number

  /**
   * Calculates the Waist-to-Height Ratio (WHtR).
   * @returns {number} The WHtR value.
   */
  getWaistToHeightRatio(): number

  /**
   * Calculates the body fat percentage. Using the U.S Navy equation
   * @returns {number} The body fat percentage.
   */
  getBodyFatPercentage(): number

  /**
   * Calculates the fat free mass. Using the Boer equation
   */
  getLeanBodyMass(): number

  /**
   * Calculates the Basal Metabolic Rate (BMR) using the Harris-Benedict equation.
   * @returns {number} The BMR value.
   */
  getBmrHarrisBenedict(): number

  /**
   * Calculates the Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation.
   * @returns {number} The BMR value.
   */
  getBmrMifflinStJeor(): number

  /**
   * Calculates the Total Daily Energy Expenditure (TDEE) using the Harris-Benedict equation.
   * @returns {number} The TDEE value.
   */
  getTdeeHarrisBenedict(): number

  /**
   * Calculates the Total Daily Energy Expenditure (TDEE) using the Mifflin-St Jeor equation.
   * @returns {number} The TDEE value.
   */
  getTdeeMifflinStJeor(): number

  /**
   * Calculates the caloric surplus or deficit based on daily calorie intake and TDEE.
   * @returns {number} The caloric surplus (positive) or deficit (negative).
   */
  getCaloricSurplusOrDeficit(): number

  /**
   * Estimates the weekly weight change based on caloric surplus or deficit.
   * @returns {number} The estimated weight change (in kilograms) over a week.
   */
  getEstimatedWeightChangeWeekly(): number

  /**
   * Estimates the monthly weight change based on caloric surplus or deficit.
   * @returns {number} The estimated weight change (in kilograms) over a month.
   */
  getEstimatedWeightChangeMonthly(): number

  /**
   * Estimates the time needed to reach a weight goal based on caloric surplus or deficit.
   * @returns {number} The estimated time (in weeks) to reach the target weight.
   */
  getEstimateTimeToWeightGoal(): number

  /**
   * Calculates the daily caloric intake needed to achieve a specific weight goal within a given timeframe.
   * @returns {number} The required daily caloric intake to reach the target weight in the given time frame.
   */
  getCaloriesForWeightGoal(): number
}
