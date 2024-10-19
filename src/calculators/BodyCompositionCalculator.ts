/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { InterfaceBodyCompositionCalculator } from '../interfaces/InterfaceBodyCompositionCalculator.js'
import { User } from '../models/User.js'

/**
 * The BodyCompositionCalculator class is responsible for calculating various body composition-related metrics
 * such as waist-to-hip ratio, waist-to-height ratio, and body fat percentage.
 */
export class BodyCompositionCalculator
  implements InterfaceBodyCompositionCalculator
{
  private CM_PER_METER = 100
  private PERCENTAGE = 100
  private TOTAL_BODY_COMPOSITION = 1
  private BODY_FAT = {
    CONSTANT_FACTOR: 495,
    SUBTRACTION_CONSTANT: 450,
  }
  private BODY_FAT_MALE = {
    CONSTANT: 1.0324,
    WAIST_NECK_FACTOR: 0.19077,
    HEIGHT_FACTOR: 0.15456,
  }
  private BODY_FAT_FEMALE = {
    CONSTANT: 1.29579,
    WAIST_HIP_NECK_FACTOR: 0.35004,
    HEIGHT_FACTOR: 0.221,
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if waist or hip measurements are missing.
   */
  calculateWaistToHipRatio(user: User): number {
    this.validateWaistAndHip(user)
    return user.waist / user.hip
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if waist or height measurements are missing.
   */
  calculateWaistToHeightRatio(user: User): number {
    this.validateWaistAndHeight(user)
    const heightInCentimeter = this.convertHeightToCentimeter(user.height)
    return user.waist / heightInCentimeter
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if required measurements (waist, neck, hip) are missing or invalid.
   */
  calculateBodyFatPercentage(user: User): number {
    this.validateRequiredMeasurements(user)
    const heightInCentimeter = this.convertHeightToCentimeter(user.height)
    return this.calculateBodyFatBasedOnGender(user, heightInCentimeter)
  }

  calculateLeanBodyMass(user: User): number {
    this.validateRequiredMeasurements(user)
    const bodyFatPercentage = this.calculateBodyFatPercentage(user)
    const bodyFatRatio = bodyFatPercentage / this.PERCENTAGE
    const leanMassRatio = this.TOTAL_BODY_COMPOSITION - bodyFatRatio
    return user.weight * leanMassRatio
  }

  private convertHeightToCentimeter(heightInMeter: number): number {
    return heightInMeter * this.CM_PER_METER
  }

  private calculateMaleBodyFat(user: User, heightInCentimeter: number): number {
    this.validateWaistAndNeck(user)
    const { CONSTANT, WAIST_NECK_FACTOR, HEIGHT_FACTOR } = this.BODY_FAT_MALE
    const { CONSTANT_FACTOR, SUBTRACTION_CONSTANT } = this.BODY_FAT

    const denominator =
      CONSTANT -
      WAIST_NECK_FACTOR * Math.log10(user.waist - user.neck) +
      HEIGHT_FACTOR * Math.log10(heightInCentimeter)

    return CONSTANT_FACTOR / denominator - SUBTRACTION_CONSTANT
  }

  private calculateFemaleBodyFat(
    user: User,
    heightInCentimeter: number
  ): number {
    this.validateWaistHipAndNeck(user)
    const { CONSTANT, WAIST_HIP_NECK_FACTOR, HEIGHT_FACTOR } =
      this.BODY_FAT_FEMALE
    const { CONSTANT_FACTOR, SUBTRACTION_CONSTANT } = this.BODY_FAT

    const denominator =
      CONSTANT -
      WAIST_HIP_NECK_FACTOR * Math.log10(user.waist + user.hip - user.neck) +
      HEIGHT_FACTOR * Math.log10(heightInCentimeter)

    return CONSTANT_FACTOR / denominator - SUBTRACTION_CONSTANT
  }

  private validateWaistAndHip(
    user: User
  ): asserts user is User & { waist: number; hip: number } {
    if (!user.waist || !user.hip) {
      throw new Error(
        'Waist and hip measurements are required for waist to hip calculation.'
      )
    }
  }

  private validateWaistAndHeight(
    user: User
  ): asserts user is User & { waist: number; height: number } {
    if (!user.waist || !user.height) {
      throw new Error(
        'Waist and height measurements are required for waist to height calculation.'
      )
    }
  }

  private validateWaistHipAndNeck(
    user: User
  ): asserts user is User & { waist: number; hip: number; neck: number } {
    if (!user.waist || !user.neck || !user.hip) {
      throw new Error(
        'Waist, hip and neck is required to calculate body fat percentage for female'
      )
    }
  }

  private validateWaistAndNeck(
    user: User
  ): asserts user is User & { waist: number; neck: number } {
    if (!user.waist || !user.neck) {
      throw new Error(
        'Waist and neck is required to calculate body fat percentage for male'
      )
    }
  }

  private validateRequiredMeasurements(
    user: User
  ): asserts user is User & { weight: number; height: number } {
    if (user.weight === undefined || user.height === undefined) {
      throw new Error(
        'Weight and height are required for body composition calculations.'
      )
    }
  }

  private calculateBodyFatBasedOnGender(
    user: User,
    heightInCentimeter: number
  ): number {
    if (user.gender === 'male') {
      return this.calculateMaleBodyFat(user, heightInCentimeter)
    }

    if (user.gender === 'female') {
      return this.calculateFemaleBodyFat(user, heightInCentimeter)
    }

    throw new Error('Invalid gender. Gender must be either "male" or "female".')
  }
}
