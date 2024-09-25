import { InterfaceBodyCompositionCalculator } from '../interfaces/InterfaceBodyCompositionCalculator'
import { User } from '../models/User'

export class BodyCompositionCalculator
  implements InterfaceBodyCompositionCalculator
{
  calculateBodyFatPercantage(user: User): number {
    throw new Error('Method not implemented.')
  }
  calculateWaitToHeightRatio(user: User): number {
    throw new Error('Method not implemented.')
  }
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
  calculateWaistToHeightRatio(user: User): number {
    const heightInCentimeter = user.height * 100
    if (user.waist && user.height) {
      const waistToHeightRatio = user.waist / heightInCentimeter
      return waistToHeightRatio
    } else {
      throw new Error(
        'Waist and height are required for Waist to height ratio calculation.'
      )
    }
  }

  calculateBodyFatPercentage(user: User): number {
    const heightInCentimeter = user.height * 100

    if (!user.waist) {
      throw new Error(
        'Waist value is required to calculate body fat percentage.'
      )
    }

    if (!user.neck) {
      throw new Error(
        'Neck value is required to calculate body fat percentage.'
      )
    }

    if (user.gender === 'male') {
      const heightFactor = 70.041 * Math.log10(heightInCentimeter)
      const waistNeckFactor = 86.01 * Math.log10(user.waist - user.neck)
      const constantFactor = 36.76

      const bodyFatPercentage = waistNeckFactor - heightFactor + constantFactor
      return bodyFatPercentage
    }

    if (user.gender === 'female') {
      if (!user.hip) {
        throw new Error(
          'Hip value is required for females to calculate body fat percentage.'
        )
      }

      const heightFactor = 97.684 * Math.log10(heightInCentimeter)
      const waistHipNeckFactor =
        163.205 * Math.log10(user.waist + user.hip - user.neck)
      const constantFactor = 78.387

      const bodyFatPercentage =
        waistHipNeckFactor - heightFactor - constantFactor
      return bodyFatPercentage
    }

    throw new Error('Invalid gender. Gender must be either "male" or "female".')
  }
}
