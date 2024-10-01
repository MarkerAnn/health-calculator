/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'

/**
 * Interface for TDEE (Total Daily Energy Expenditure) Calculator.
 */
export interface InterfaceTdeeCalculator {
  /**
   * Calculates the Total Daily Energy Expenditure (TDEE) using the Mifflin-St Jeor equation.
   *
   * @param user - The user object containing age and activity level.
   * @param bmrMifflinStJeor - The Basal Metabolic Rate (BMR) calculated using the Mifflin-St Jeor equation.
   * @returns The calculated TDEE based on the user's activity level.
   */
  calculateTdeeMifflinStJeor(user: User, bmrMifflinStJeor: number): number

  /**
   * Calculates the Total Daily Energy Expenditure (TDEE) using the Harris-Benedict equation.
   *
   * @param {User} user - The user object containing age and activity level.
   * @param {number} bmrHarrisBenedict - The Basal Metabolic Rate (BMR) calculated using the Harris-Benedict equation.
   * @returns {number} - The calculated TDEE.
   */
  calculateTdeeHarrisBenedict(user: User, bmrHarrisBenedict: number): number
}
