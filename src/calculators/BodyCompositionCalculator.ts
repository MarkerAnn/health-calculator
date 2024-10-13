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
  private BODY_FAT_MALE = {
    HEIGHT_LOG_FACTOR: 70.041,
    WAIST_NECK_LOG_FACTOR: 86.01,
    CONSTANT_FACTOR: 36.76,
  }
  private BODY_FAT_FEMALE = {
    HEIGHT_LOG_FACTOR: 97.684,
    WAIST_HIP_NECK_LOG_FACTOR: 163.205,
    CONSTANT_FACTOR: 78.387,
  }
  private LEAN_BODY_MASS_MALE = {
    WEIGHT_FACTOR: 0.407,
    HEIGHT_FACTOR: 0.267,
    SUBTRACTION_CONSTANT: 19.2,
  }
  private LEAN_BODY_MASS_FEMALE = {
    WEIGHT_FACTOR: 0.252,
    HEIGHT_FACTOR: 0.473,
    SUBTRACTION_CONSTANT: 48.3,
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
    const heightInCentimeter = this.convertHeightToCentimeter(user.height)
    return this.calculateBodyFatBasedOnGender(user, heightInCentimeter)
  }

  calculateLeanBodyMass(user: User): number {
    const heightInCentimeter = this.convertHeightToCentimeter(user.height)
    return this.calculateLeanBodyMassBasedOnGender(user, heightInCentimeter)
  }

  private convertHeightToCentimeter(heightInMeter: number): number {
    return heightInMeter * this.CM_PER_METER
  }

  private calculateMaleBodyFat(user: User, heightInCentimeter: number): number {
    this.validateWaistAndNeck(user)
    const waistNeckDifference = user.waist - user.neck
    this.validateDifference(
      waistNeckDifference,
      'Invalid values: waist must be greater than neck for males.'
    )
    const { HEIGHT_LOG_FACTOR, WAIST_NECK_LOG_FACTOR, CONSTANT_FACTOR } =
      this.BODY_FAT_MALE
    const heightFactor = HEIGHT_LOG_FACTOR * Math.log10(heightInCentimeter)
    const waistNeckFactor =
      WAIST_NECK_LOG_FACTOR * Math.log10(waistNeckDifference)

    return waistNeckFactor - heightFactor + CONSTANT_FACTOR
  }

  private calculateFemaleBodyFat(
    user: User,
    heightInCentimeter: number
  ): number {
    this.validateWaistHipAndNeck(user)
    const waistHipNeckDifference = user.waist + user.hip - user.neck
    this.validateDifference(
      waistHipNeckDifference,
      'Invalid values: the sum of waist + hip - neck must be greater than zero for females.'
    )
    const { HEIGHT_LOG_FACTOR, WAIST_HIP_NECK_LOG_FACTOR, CONSTANT_FACTOR } =
      this.BODY_FAT_FEMALE
    const heightFactor = HEIGHT_LOG_FACTOR * Math.log10(heightInCentimeter)
    const waistHipNeckFactor =
      WAIST_HIP_NECK_LOG_FACTOR * Math.log10(waistHipNeckDifference)

    return waistHipNeckFactor - heightFactor - CONSTANT_FACTOR
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

  private validateDifference(difference: number, errorMessage: string): void {
    if (difference <= 0) {
      throw new Error(errorMessage)
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

  private calculateLeanBodyMassBasedOnGender(
    user: User,
    heightInCentimeter: number
  ): number {
    if (user.gender === 'male') {
      return this.calculateMaleLeanBodyMass(user, heightInCentimeter)
    }
    if (user.gender === 'female') {
      return this.calculateFemaleLeanBodyMass(user, heightInCentimeter)
    }

    throw new Error('Invalid gender. Gender must be either "male" or "female".')
  }

  private calculateMaleLeanBodyMass(
    user: User,
    heightInCentimeter: number
  ): number {
    const { WEIGHT_FACTOR, HEIGHT_FACTOR, SUBTRACTION_CONSTANT } =
      this.LEAN_BODY_MASS_MALE
    return (
      WEIGHT_FACTOR * user.weight +
      HEIGHT_FACTOR * heightInCentimeter -
      SUBTRACTION_CONSTANT
    )
  }

  private calculateFemaleLeanBodyMass(
    user: User,
    heightInCentimeter: number
  ): number {
    const { WEIGHT_FACTOR, HEIGHT_FACTOR, SUBTRACTION_CONSTANT } =
      this.LEAN_BODY_MASS_FEMALE
    return (
      WEIGHT_FACTOR * user.weight +
      HEIGHT_FACTOR * heightInCentimeter -
      SUBTRACTION_CONSTANT
    )
  }
}
