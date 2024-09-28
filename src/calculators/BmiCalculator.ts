/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { InterfaceBmiCalculator } from '../interfaces/InterfaceBmiCalculator'
import { User } from '../models/User'
import { BmiType, bmiRanges } from '../enums/constants'

/**
 * The BmiCalculator class is responsible for calculating Body Mass Index (BMI),
 * BMI type, BMI prime, and the ideal weight range for a given user.
 */
export class BmiCalculator implements InterfaceBmiCalculator {
  /**
   * @inheritdoc
   */
  calculateBmi(user: User): number {
    const bmi = user.weight / Math.pow(user.height, 2)
    return bmi
  }

  /**
   * @ineheritdoc
   * @throws {Error} Throws an error if the BMI value is out of the defined ranges.
   */
  calculateBmiType(bmi: number): string {
    const bmiRounded = Math.round(bmi)
    for (const range of bmiRanges) {
      if (bmiRounded >= range.min && bmiRounded <= range.max) {
        return range.type
      }
    }
    throw new Error(
      `BMI type out of range. Please check your values. BMI: ${bmiRounded}`
    )
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if the BMI range cannot be found or if the user object is missing valid height data.
   */
  calculateIdealWeight(user: User): [number, number] {
    const normalBmiRange = bmiRanges.find(
      (range) => range.type === BmiType.Normal
    )

    if (normalBmiRange) {
      const minNormalBmi = normalBmiRange.min
      const maxNormalBmi = normalBmiRange.max

      const minIdealWeight = minNormalBmi * Math.pow(user.height, 2)
      const maxIdealWeight = maxNormalBmi * Math.pow(user.height, 2)

      return [minIdealWeight, maxIdealWeight]
    } else {
      throw new Error(
        'Could not find BMI range, check User object height value'
      )
    }
  }

  /**
   * @inheritdoc
   */
  calculateBmiPrime(bmi: number): number {
    const bmiPrime = bmi / 25
    return bmiPrime
  }
}
