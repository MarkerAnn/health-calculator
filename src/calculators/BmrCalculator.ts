/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'
import { InterfaceBmrCalculator } from '../interfaces/InterfaceBmrCalculator.js'

/**
 * BmrCalculator class calculates the Basal Metabolic Rate (BMR) for a given user
 * using both the Harris-Benedict and Mifflin-St Jeor equations.
 */
export class BmrCalculator implements InterfaceBmrCalculator {
  private CM_PER_METER = 100
  private MIFFLIN_ST_JEOR = {
    WEIGHT_FACTOR: 10,
    HEIGHT_FACTOR: 6.25,
    AGE_FACTOR: 5,
    MALE_ADJUSTMENT: 5,
    FEMALE_ADJUSTMENT: -161,
  }
  private HARRIS_BENEDICT = {
    FEMALE: {
      BASE: 447.593,
      WEIGHT_FACTOR: 9.247,
      HEIGHT_FACTOR: 3.098,
      AGE_FACTOR: 4.33,
    },
    MALE: {
      BASE: 88.362,
      WEIGHT_FACTOR: 13.397,
      HEIGHT_FACTOR: 4.799,
      AGE_FACTOR: 5.677,
    },
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if weight, height, age or gender is not provided or if the gender is invalid.
   */
  calculateBmrHarrisBenedict(user: User): number {
    this.validateRequiredFields(user)
    const heightInCentimeter = this.convertHeightToCentimeter(user.height)
    return this.calculateBmrBasedOnGender(user, heightInCentimeter)
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if weight, height, age or gender is not provided or if the gender is invalid.
   */
  calculateBmrMifflinStJeor(user: User): number {
    this.validateRequiredFields(user)

    const heightInCentimeter = this.convertHeightToCentimeter(user.height)
    const weightFactor = this.MIFFLIN_ST_JEOR.WEIGHT_FACTOR * user.weight
    const heightFactor = this.MIFFLIN_ST_JEOR.HEIGHT_FACTOR * heightInCentimeter
    const ageFactor = this.MIFFLIN_ST_JEOR.AGE_FACTOR * user.age
    const genderComponent =
      user.gender === 'male'
        ? this.MIFFLIN_ST_JEOR.MALE_ADJUSTMENT
        : this.MIFFLIN_ST_JEOR.FEMALE_ADJUSTMENT
    const bmr = weightFactor + heightFactor - ageFactor + genderComponent

    return bmr
  }

  private convertHeightToCentimeter(heightInMeter: number): number {
    return heightInMeter * this.CM_PER_METER
  }

  private harrisBenedictFemale(
    user: User & { weight: number; age: number },
    heightInCentimeter: number
  ): number {
    const { BASE, WEIGHT_FACTOR, HEIGHT_FACTOR, AGE_FACTOR } =
      this.HARRIS_BENEDICT.FEMALE
    const weightFactor = WEIGHT_FACTOR * user.weight
    const lengthFactor = HEIGHT_FACTOR * heightInCentimeter
    const ageFactor = AGE_FACTOR * user.age

    return BASE + weightFactor + lengthFactor - ageFactor
  }

  private harrisBenedictMale(
    user: User & { weight: number; age: number },
    heightInCentimeter: number
  ): number {
    const { BASE, WEIGHT_FACTOR, HEIGHT_FACTOR, AGE_FACTOR } =
      this.HARRIS_BENEDICT.MALE
    const weightFactor = WEIGHT_FACTOR * user.weight
    const lengthFactor = HEIGHT_FACTOR * heightInCentimeter
    const ageFactor = AGE_FACTOR * user.age

    return BASE + weightFactor + lengthFactor - ageFactor
  }

  private calculateBmrBasedOnGender(
    user: User & {
      weight: number
      height: number
      age: number
      gender: 'male' | 'female'
    },
    heightInCentimeter: number
  ): number {
    if (user.gender === 'male') {
      return this.harrisBenedictMale(user, heightInCentimeter)
    }
    if (user.gender === 'female') {
      return this.harrisBenedictFemale(user, heightInCentimeter)
    }
    throw new Error("Invalid gender. Gender must be either 'male' or 'female'.")
  }

  private validateRequiredFields(user: User): asserts user is User & {
    weight: number
    height: number
    age: number
    gender: 'male' | 'female'
  } {
    if (
      user.weight === undefined ||
      typeof user.weight !== 'number' ||
      user.weight <= 0
    ) {
      throw new Error('Valid weight is required for BMR calculation.')
    }
    if (
      user.height === undefined ||
      typeof user.height !== 'number' ||
      user.height <= 0
    ) {
      throw new Error('Valid height is required for BMR calculation.')
    }
    if (
      user.age === undefined ||
      typeof user.age !== 'number' ||
      user.age <= 0
    ) {
      throw new Error('Valid age is required for BMR calculation.')
    }
    if (
      user.gender === undefined ||
      (user.gender !== 'male' && user.gender !== 'female')
    ) {
      throw new Error(
        "Valid gender is required for BMR calculation. Gender must be either 'male' or 'female'."
      )
    }
  }
}
