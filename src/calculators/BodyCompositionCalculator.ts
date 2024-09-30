/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { InterfaceBodyCompositionCalculator } from '../interfaces/InterfaceBodyCompositionCalculator'
import { User } from '../models/User'

/**
 * The BodyCompositionCalculator class is responsible for calculating various body composition-related metrics
 * such as waist-to-hip ratio, waist-to-height ratio, and body fat percentage.
 */
export class BodyCompositionCalculator
  implements InterfaceBodyCompositionCalculator
{
  /**
   * @inheritdoc
   * @throws {Error} Throws an error if waist or hip measurements are missing.
   */
  calculateWaistToHipRatio(user: User): number {
    this.validateWaistAndHip(user)
    const waistToHipRatio = user.waist / user.hip
    return waistToHipRatio
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if waist or height measurements are missing.
   */
  calculateWaistToHeightRatio(user: User): number {
    this.validateWaistAndHeight(user)
    const heightInCentimeter = this.convertHeightToCentimeter(user.height)
    const waistToHeightRatio = user.waist / heightInCentimeter

    return waistToHeightRatio
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
    const heightInCentimeter = heightInMeter * 100
    return heightInCentimeter
  }

  private calculateMaleBodyFat(user: User, heightInCentimeter: number): number {
    this.validateWaistAndNeck(user)
    const waistNeckDifference = user.waist - user.neck
    this.validateDifference(
      waistNeckDifference,
      'Invalid values: waist must be greater than neck for males.'
    )
    const heightLogFactor = 70.041
    const waistNeckLogFactor = 86.01
    const heightFactor = heightLogFactor * Math.log10(heightInCentimeter)
    const waistNeckFactor = waistNeckLogFactor * Math.log10(waistNeckDifference)
    const constantFactor = 36.76

    return waistNeckFactor - heightFactor + constantFactor
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
    const heightLogFactor = 97.684
    const waistHipNeckLogFactor = 163.205
    const heightFactor = heightLogFactor * Math.log10(heightInCentimeter)
    const waistHipNeckFactor =
      waistHipNeckLogFactor * Math.log10(waistHipNeckDifference)
    const constantFactor = 78.387

    return waistHipNeckFactor - heightFactor - constantFactor
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

  private calculateLanBodyMassBasedOnGender(
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
    const weightFactor = 0.407
    const heightFactor = 0.267
    const subtractionConstant = 19.2

    const leanBodyMass =
      weightFactor * user.weight +
      heightFactor * heightInCentimeter -
      subtractionConstant
    return leanBodyMass
  }

  private calculateFemaleLeanBodyMass(
    user: User,
    heightInCentimeter: number
  ): number {
    const weightFactor = 0.252
    const heightFactor = 0.473
    const subtractionConstant = 48.3

    const leanBodyMass =
      weightFactor * user.weight +
      heightFactor * heightInCentimeter -
      subtractionConstant
    return leanBodyMass
  }
}
