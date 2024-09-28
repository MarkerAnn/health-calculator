/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User'
import { InterfaceBmrCalculator } from '../interfaces/InterfaceBmrCalculator'

/**
 * BmrCalculator class calculates the Basal Metabolic Rate (BMR) for a given user
 * using both the Harris-Benedict and Mifflin-St Jeor equations.
 */
export class BmrCalculator implements InterfaceBmrCalculator {
  /**
   * @inheritdoc
   * @throws {Error} Throws an error if age or gender is not provided or if the gender is invalid.
   */
  calculateBmrHarrisBenedict(user: User): number {
    const heightInCentimeter = this.convertHeightToCentimeter(user.height)

    if (user.gender === 'male') {
      return this.harrisBenedictMale(user, heightInCentimeter)
    }
    if (user.gender === 'female') {
      return this.harrisBenedictFemale(user, heightInCentimeter)
    }
    throw new Error("Invalid gender, Gender must be either 'male' or 'female'.")
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if age is not provided or if the gender is invalid.
   */
  calculateBmrMifflinStJeor(user: User): number {
    if (!user.age) {
      throw new Error('Age is required for calculateBmrMifflinStJeor method')
    }
    const heightInCentimeter = this.convertHeightToCentimeter(user.height)
    const weightFactor = 10 * user.weight
    const heightFactor = 6.25 * heightInCentimeter
    const ageFactor = 5 * user.age
    const genderComponent = user.gender === 'male' ? 5 : -161
    const bmr = weightFactor + heightFactor - ageFactor + genderComponent

    return bmr
  }

  private convertHeightToCentimeter(heightInMeter: number): number {
    const heightInCentimeter = heightInMeter * 100
    return heightInCentimeter
  }

  private harrisBenedictFemale(user: User, heightInCentimeter: number): number {
    if (!user.age) {
      throw new Error('Age is required for calculateBmRHarrisBenedict method')
    }
    const weightFactor = 9.247 * user.weight
    const lengthFactor = 3.098 * heightInCentimeter
    const ageFactor = 4.33 * user.age

    const bmrFemale = 447.593 + weightFactor + lengthFactor - ageFactor
    return bmrFemale
  }

  private harrisBenedictMale(user: User, heightInCentimeter: number): number {
    if (!user.age) {
      throw new Error('Age is required for calculateBmRHarrisBenedict method')
    }
    const weightFactor = 13.397 * user.weight
    const lengthFactor = 4.799 * heightInCentimeter
    const ageFactor = 5.677 * user.age

    const bmrMale = 88.362 + weightFactor + lengthFactor - ageFactor
    return bmrMale
  }
}
