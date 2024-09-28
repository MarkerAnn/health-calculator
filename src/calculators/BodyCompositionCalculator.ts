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
    if (user.waist && user.hip) {
      const waistToHipRatio = user.waist / user.hip
      return waistToHipRatio
    } else {
      throw new Error(
        'Waist and hip measurements are required for waist to hip calculation.'
      )
    }
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if waist or height measurements are missing.
   */
  calculateWaistToHeightRatio(user: User): number {
    const heightInCentimeter = this.convertHeightToCentimeter(user.height)
    if (user.waist && user.height) {
      const waistToHeightRatio = user.waist / heightInCentimeter
      return waistToHeightRatio
    } else {
      throw new Error(
        'Waist and height are required for Waist to height ratio calculation.'
      )
    }
  }

  /**
   * @inheritdoc
   * @throws {Error} Throws an error if required measurements (waist, neck, hip) are missing or invalid.
   */
  calculateBodyFatPercentage(user: User): number {
    const heightInCentimeter = this.convertHeightToCentimeter(user.height)

    if (user.gender === 'male') {
      return this.calculateMaleBodyFat(user, heightInCentimeter)
    }

    if (user.gender === 'female') {
      return this.calculateFemaleBodyFat(user, heightInCentimeter)
    }

    throw new Error('Invalid gender. Gender must be either "male" or "female".')
  }

  private convertHeightToCentimeter(heightInMeter: number): number {
    const heightInCentimeter = heightInMeter * 100
    return heightInCentimeter
  }

  private calculateMaleBodyFat(user: User, heightInCentimeter: number): number {
    if (!user.waist || !user.neck) {
      throw new Error(
        'Waist and neck is required to calculate body fat percentage for male'
      )
    }
    const waistNeckDifference = user.waist - user.neck
    if (waistNeckDifference <= 0) {
      throw new Error(
        'Invalid values: waist must be greater than neck for males.'
      )
    }

    const heightFactor = 70.041 * Math.log10(heightInCentimeter)
    const waistNeckFactor = 86.01 * Math.log10(waistNeckDifference)
    const constantFactor = 36.76

    return waistNeckFactor - heightFactor + constantFactor
  }

  private calculateFemaleBodyFat(
    user: User,
    heightInCentimeter: number
  ): number {
    if (!user.waist || !user.neck || !user.hip) {
      throw new Error(
        'Waist, hip and neck is required to calculate body fat percentage for female'
      )
    }
    const waistHipNeckSum = user.waist + user.hip - user.neck
    if (waistHipNeckSum <= 0) {
      throw new Error(
        'Invalid values: the sum of waist + hip - neck must be greater than zero for females.'
      )
    }

    const heightFactor = 97.684 * Math.log10(heightInCentimeter)
    const waistHipNeckFactor = 163.205 * Math.log10(waistHipNeckSum)
    const constantFactor = 78.387

    return waistHipNeckFactor - heightFactor - constantFactor
  }
}
