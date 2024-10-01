/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'

/**
 * Interface for calculating Basal Metabolic Rate (BMR) using different formulas.
 */
export interface InterfaceBmrCalculator {
  /**
   * Calculates the Basal Metabolic Rate (BMR) using the Harris-Benedict equation.
   *
   * @param {User} user - The user object containing age, weight, height, and gender.
   * @returns {number} The calculated BMR in calories/day.
   */
  calculateBmrHarrisBenedict(user: User): number

  /**
   * Calculates the Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation.
   *
   * @param {User} user - The user object containing age, weight, height, and gender.
   * @returns {number} The calculated BMR in calories/day.
   */
  calculateBmrMifflinStJeor(user: User): number
}
