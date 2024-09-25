import { InterfaceBmiCalculator } from '../interfaces/InterfaceBmiCalculator'
import { User } from '../models/User'
import { BmiType, bmiRanges } from '../enums/constants'

/**
 * The BmiCalculator class is responsible for calculating Body Mass Index (BMI),
 * BMI type, BMI prime, and the ideal weight range for a given user.
 */
export class BmiCalculator implements InterfaceBmiCalculator {
  /**
   * Calculates the Body Mass Index (BMI) for the given user.
   *
   * @param {User} user - The user object containing weight (in kilograms) and height (in meters).
   * @returns {number} The calculated BMI.
   */
  calculateBmi(user: User): number {
    const bmi = user.weight / Math.pow(user.height, 2)
    return bmi
  }

  /**
   * Determines the BMI classification (type) based on the calculated BMI.
   *
   * @param {number} bmi - The calculated BMI value.
   * @returns {string} The BMI type (e.g., 'Underweight', 'Normal', 'Overweight', etc.).
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
   * Calculates the ideal weight range for the user based on their height.
   * The range is calculated using the 'Normal' BMI range.
   *
   * @param {User} user - The user object containing height (in meters).
   * @returns {[number, number]} A tuple containing the minimum and maximum ideal weight in kilograms.
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
   * Calculates the BMI Prime, which is the ratio of the user's BMI to the upper limit of the normal BMI range (25).
   *
   * @param {number} bmi - The calculated BMI value.
   * @returns {number} The BMI Prime value.
   */
  calculateBmiPrime(bmi: number): number {
    const bmiPrime = bmi / 25
    return bmiPrime
  }
}
