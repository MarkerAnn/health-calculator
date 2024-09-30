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
    const heightExponent = 2
    const bmi = user.weight / Math.pow(user.height, heightExponent)
    return bmi
  }

  /**
   * @ineheritdoc
   * @throws {Error} Throws an error if the BMI value is out of the defined ranges.
   */
  calculateBmiType(bmi: number): string {
    this.validateBmi(bmi)
    const bmiRounded = this.roundBmi(bmi)
    const bmiType = this.findBmiType(bmiRounded)
    if (bmiType) {
      return bmiType
    }

    throw new Error(`BMI type out of range. BMI: ${bmiRounded}`)
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if the BMI range cannot be found or if the user object is missing valid height data.
   */
  calculateIdealWeight(user: User): [number, number] {
    const normalBmiRange = this.getNormalBmiRange()
    const minIdealWeight = this.calculateWeight(normalBmiRange.min, user.height)
    const maxIdealWeight = this.calculateWeight(normalBmiRange.max, user.height)

    return [minIdealWeight, maxIdealWeight]
  }

  /**
   * @inheritdoc
   */
  calculateBmiPrime(bmi: number): number {
    const denominator = 25
    const bmiPrime = bmi / denominator
    return bmiPrime
  }

  private validateBmi(bmi: number): void {
    if (bmi <= 0 || bmi > 100) {
      throw new Error(`BMI out of range. Please check your values. BMI: ${bmi}`)
    }
  }

  private roundBmi(bmi: number): number {
    return Math.round(bmi)
  }

  private findBmiType(bmi: number): string | null {
    for (const range of bmiRanges) {
      if (bmi >= range.min && bmi <= range.max) {
        return range.type
      }
    }
    return null
  }

  private getNormalBmiRange(): { min: number; max: number } {
    const normalBmiRange = bmiRanges.find(
      (range) => range.type === BmiType.Normal
    )

    if (!normalBmiRange) {
      throw new Error('Could not find normal BMI range.')
    }

    return normalBmiRange
  }

  private calculateWeight(bmi: number, height: number): number {
    const heightExponent = 2
    return bmi * Math.pow(height, heightExponent)
  }
}
