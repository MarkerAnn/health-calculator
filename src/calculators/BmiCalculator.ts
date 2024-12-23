/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { InterfaceBmiCalculator } from '../interfaces/InterfaceBmiCalculator.js'
import { User } from '../models/User.js'
import { BmiType, bmiRanges } from '../enums/constants.js'

/**
 * The BmiCalculator class is responsible for calculating Body Mass Index (BMI),
 * BMI type, BMI prime, and the ideal weight range for a given user.
 */
export class BmiCalculator implements InterfaceBmiCalculator {
  /**
   * @inheritdoc
   * @throws {Error} Throws an error if weight or height is not provided.
   */
  calculateBmi(user: User): number {
    this.validateWeightAndHeight(user)
    const heightExponent = 2
    const bmi = user.weight / Math.pow(user.height, heightExponent)
    return bmi
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if the BMI value is out of the defined ranges.
   */
  calculateBmiType(bmi: number): string {
    this.validateBmi(bmi)
    const bmiRounded = this.roundBmi(bmi)
    const bmiType = this.findBmiType(bmiRounded)

    return bmiType
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if the BMI range cannot be found or if the user object is missing valid height data.
   */
  calculateIdealWeight(user: User): [number, number] {
    this.validateHeight(user)
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

  private validateWeightAndHeight(
    user: User
  ): asserts user is User & { weight: number; height: number } {
    if (user.weight === undefined || user.height === undefined) {
      throw new Error('Weight and height are required for BMI calculation.')
    }
    if (typeof user.weight !== 'number' || typeof user.height !== 'number') {
      throw new Error('Weight and height must be numbers.')
    }
    if (user.weight <= 0 || user.height <= 0) {
      throw new Error('Weight and height must be positive numbers.')
    }
  }

  private validateHeight(
    user: User
  ): asserts user is User & { height: number } {
    if (user.height === undefined) {
      throw new Error('Height is required for ideal weight calculation.')
    }
    if (typeof user.height !== 'number') {
      throw new Error('Height must be a number.')
    }
    if (user.height <= 0) {
      throw new Error('Height must be a positive number.')
    }
  }

  private validateBmi(bmi: number): void {
    if (bmi <= 0 || bmi > 100) {
      throw new Error(`BMI out of range. Please check your values. BMI: ${bmi}`)
    }
  }

  private roundBmi(bmi: number): number {
    return Math.round(bmi)
  }

  private findBmiType(bmi: number): string {
    for (const range of bmiRanges) {
      if (bmi >= range.min && bmi <= range.max) {
        return range.type
      }
    }
    throw new Error(`Bmi Type could not be found`)
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
