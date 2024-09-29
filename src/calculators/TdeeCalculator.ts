/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User'
import { InterfaceTdeeCalculator } from '../interfaces/InterfaceTdeeCalculator'

/**
 * Class representing a TDEE (Total Daily Energy Expenditure) calculator.
 * Provides methods to calculate TDEE using different equations.
 */ export class TdeeCalculator implements InterfaceTdeeCalculator {
  /**
   * @inheritdoc
   * @throws Will throw an error if the user's age or activity level is not provided.
   */
  calculateTdeeMifflinStJeor(user: User, bmrMifflinStJeor: number): number {
    this.validateAgeAndActivityLevel(user)
    const bmr = bmrMifflinStJeor
    const activityFactor = this.getActivityFactor(user.activityLevel)

    return this.calculateTdee(bmr, activityFactor)
  }

  /**
   * @inheritdoc
   * @throws {Error} - Throws an error if age or activity level is not provided in the user object.
   */
  calculateTdeeHarrisBenedict(user: User, bmrHarrisBenedict: number): number {
    this.validateAgeAndActivityLevel(user)
    const bmr = bmrHarrisBenedict
    const activityFactor = this.getActivityFactor(user.activityLevel)

    return this.calculateTdee(bmr, activityFactor)
  }

  private getActivityFactor(activityLevel: string): number {
    if (activityLevel === 'sedentary') {
      return 1.2
    }
    if (activityLevel === 'lightly') {
      return 1.375
    }
    if (activityLevel === 'moderately') {
      return 1.55
    }
    if (activityLevel === 'very') {
      return 1.725
    }
    if (activityLevel === 'extremely') {
      return 1.9
    }
    throw new Error(
      'Activity level must be sedentary, lightly moderately, very or extremely'
    )
  }

  private validateAgeAndActivityLevel(
    user: User
  ): asserts user is User & { activityLevel: string } {
    if (!user.age || !user.activityLevel) {
      throw new Error('Age and activity level is required for TDEE methods')
    }
  }

  private calculateTdee(bmr: number, activityFactor: number): number {
    return bmr * activityFactor
  }
}
