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
  getBodyFatPercantage(): number

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
}
