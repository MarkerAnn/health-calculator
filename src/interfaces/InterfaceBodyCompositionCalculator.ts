/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'
/**
 * Interface for body composition calculators.
 * Provides methods to calculate various body composition metrics.
 */
export interface InterfaceBodyCompositionCalculator {
  /**
   * Calculates the waist-to-hip ratio for a given user.
   *
   * @param user - The user for whom the waist-to-hip ratio is to be calculated.
   * @returns The waist-to-hip ratio.
   */
  calculateWaistToHipRatio(user: User): number

  /**
   * Calculates the waist-to-height ratio for a given user.
   *
   * @param user - The user for whom the waist-to-height ratio is to be calculated.
   * @returns The waist-to-height ratio.
   */
  calculateWaistToHeightRatio(user: User): number

  /**
   * Calculates the body fat percentage based on the user's measurements and gender. Using the U.S Navy equation
   *
   * For males, the calculation uses the waist and neck values, while for females,
   * it also includes the hip value.
   * @param user - The user for whom the body fat percentage is to be calculated.
   * @returns The body fat percentage.
   */
  calculateBodyFatPercentage(user: User): number

  /**
   * Calculates the fat free mass on the body, based on the user's gender,weight and height. Using Boer equation
   *
   * @param user - The user whom the lean body mass is to be calulated
   * @returns The fat free body mass in kilo
   */
  calculateLeanBodyMass(user: User): number
}
