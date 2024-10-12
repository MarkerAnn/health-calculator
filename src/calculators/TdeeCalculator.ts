/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'
import { InterfaceTdeeCalculator } from '../interfaces/InterfaceTdeeCalculator.js'
import { ActivityLevel } from '../enums/constants.js'

/**
 * Class representing a TDEE (Total Daily Energy Expenditure) calculator.
 * Provides methods to calculate TDEE using different equations.
 */ export class TdeeCalculator implements InterfaceTdeeCalculator {
  private ACTIVITY_FACTORS = {
    SEDENTARY: 1.2,
    LIGHTLY: 1.375,
    MODERATELY: 1.55,
    VERY: 1.725,
    EXTREMELY: 1.9,
  }
  /**
   * @inheritdoc
   * @throws Will throw an error if the user's age or activity level is not provided.
   */
  calculateTdeeMifflinStJeor(user: User, bmrMifflinStJeor: number): number {
    this.validateAgeAndActivityLevel(user)
    const bmr = bmrMifflinStJeor
    const activityFactor = this.getActivityFactor(
      user.activityLevel as ActivityLevel
    )

    return this.calculateTdee(bmr, activityFactor)
  }

  /**
   * @inheritdoc
   * @throws {Error} - Throws an error if age or activity level is not provided in the user object.
   */
  calculateTdeeHarrisBenedict(user: User, bmrHarrisBenedict: number): number {
    this.validateAgeAndActivityLevel(user)
    const bmr = bmrHarrisBenedict
    const activityFactor = this.getActivityFactor(
      user.activityLevel as ActivityLevel
    )

    return this.calculateTdee(bmr, activityFactor)
  }

  private getActivityFactor(activityLevel: ActivityLevel): number {
    switch (activityLevel) {
      case ActivityLevel.Sedentary:
        return this.ACTIVITY_FACTORS.SEDENTARY
      case ActivityLevel.Lightly:
        return this.ACTIVITY_FACTORS.LIGHTLY
      case ActivityLevel.Moderately:
        return this.ACTIVITY_FACTORS.MODERATELY
      case ActivityLevel.Very:
        return this.ACTIVITY_FACTORS.VERY
      case ActivityLevel.Extremely:
        return this.ACTIVITY_FACTORS.EXTREMELY
      default:
        throw new Error(
          'Activity level must be sedentary, lightly, moderately, very, or extremely'
        )
    }
  }

  private validateAgeAndActivityLevel(
    user: User
  ): asserts user is User & { activityLevel: string } {
    if (!user.age || !user.activityLevel) {
      throw new Error('Age and activity level is required')
    }
  }

  private calculateTdee(bmr: number, activityFactor: number): number {
    return bmr * activityFactor
  }
}
