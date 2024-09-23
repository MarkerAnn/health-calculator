// BMI = vikt kg / (längd m)^2
// import { BmiType, bmiRanges } from '../enums/constants'

import { InterfaceHealthCalculation } from '../interfaces/InterfaceHealthCalculation'
import { User } from '../models/User'
import { validateUserInput } from '../utils/validateUserObject'
import { convertUserToMetric } from '../utils/unitConverter'
import { copyUser } from '../utils/copyUser'
import { BmiType, bmiRanges } from '../enums/constants'

export class HealthCalculator implements InterfaceHealthCalculation {
  private user: User

  constructor(user: User) {
    validateUserInput(user)
    const userCopy = copyUser(user)
    // TODO: reflektera över namnet nedan.
    this.user = convertUserToMetric(userCopy) as User
  }
  calculateWaistToHipRatio(): number {
    throw new Error('Method not implemented.')
  }

  calculateBmi(): number {
    return this.user.weight / Math.pow(this.user.height, 2)
  }

  calculateBmiType(): string {
    const bmi = this.calculateBmi()

    for (const range of bmiRanges) {
      if (bmi >= range.min && bmi <= range.max) {
        return range.type
      }
    }
    return 'BMI out of range. Please check you values.'
  }

  calculateBmiPrime(): number {
    const bmi = this.calculateBmi()
    const bmiPrime = bmi / 25
    return bmiPrime
  }

  /**
   * Calculates the Basal Metabolic Rate (BMR) using the Harris-Benedict equation.
   * The calculation is based on the user's gender, weight, height, and age.
   *
   * For males:
   * BMR = 88.362 + (13.397 * weight in kg) + (4.799 * height in cm) - (5.677 * age in years)
   *
   * For females:
   * BMR = 447.593 + (9.247 * weight in kg) + (3.098 * height in cm) - (4.33 * age in years)
   *
   * @returns {number} The calculated BMR value. Returns NaN if the user's age is not provided.
   *
   * @throws {Error} Throws an error if the user's gender is not 'male' or 'female'.
   */
  calculateBmrHarrisBenedict(): number {
    if (this.user.age) {
      const heightInCentimeter = this.user.height * 100

      if (this.user.gender === 'male') {
        const weightFactor = 13.397 * this.user.weight
        const lengthFactor = 4.799 * heightInCentimeter
        const ageFactor = 5.677 * this.user.age

        const bmrMale = 88.362 + weightFactor + lengthFactor - ageFactor
        return bmrMale
      }
      if (this.user.gender === 'female') {
        const weightFactor = 9.247 * this.user.weight
        const lengthFactor = 3.098 * heightInCentimeter
        const ageFactor = 4.33 * this.user.age

        const bmrFemale = 447.593 + weightFactor + lengthFactor - ageFactor
        console.log('bmrFemale:', this.user)
        return bmrFemale
      }
    }
    console.warn('Age is required for this method!')
    return NaN
  }

  calculateBmrMifflinStJeor(): number {
    if (this.user.age) {
      const heightInCentimeter = this.user.height * 100
      const weightFactor = 10 * this.user.weight
      const heightFactor = 6.25 * heightInCentimeter
      const ageFactor = 5 * this.user.age
      const genderComponent = this.user.gender === 'male' ? 5 : -161
      const bmr = weightFactor + heightFactor - ageFactor + genderComponent

      return bmr
    }
    console.warn('age is reqired for this method')
    return NaN
  }

  calculateTdee(): number {
    if (this.user.age && this.user.activityLevel) {
      const bmr = this.calculateBmrMifflinStJeor()
      let activityFactor = 0
      if (this.user.activityLevel === 'sedentary') {
        activityFactor = 1.2
      } else if (this.user.activityLevel === 'lightly') {
        activityFactor = 1.375
      } else if (this.user.activityLevel === 'moderately') {
        activityFactor = 1.55
      } else if (this.user.activityLevel === 'very') {
        activityFactor = 1.725
      } else if (this.user.activityLevel === 'extremely') {
        activityFactor = 1.9
      }
      const tdee = bmr * activityFactor
      return tdee
    }
    console.warn('Age and activity level is required for this method')
    return NaN
  }
  calculateIdealWeight(): [number, number] {
    const normalBmiRange = bmiRanges.find(
      (range) => range.type === BmiType.Normal
    )

    if (normalBmiRange) {
      const minNormalBmi = normalBmiRange.min
      const maxNormalBmi = normalBmiRange.max

      const minIdealWeight = minNormalBmi * Math.pow(this.user.height, 2)
      const maxIdealWeight = maxNormalBmi * Math.pow(this.user.height, 2)

      return [minIdealWeight, maxIdealWeight]
    } else {
      console.warn('Could not find BMI range, check User object height value')
      return [NaN, NaN]
    }
  }
  calculateBodyFatPercentage(): number {
    if (this.user.waist && this.user.neck) {
      const heightInCentimeter = this.user.height * 100
      if (this.user.gender === 'male') {
        const heightFactor = 70.041 * Math.log10(heightInCentimeter)
        const waistNeckFactor =
          86.01 * Math.log10(this.user.waist - this.user.neck)
        const constantFactor = 36.76

        const bodyFatPercentage =
          waistNeckFactor - heightFactor + constantFactor
        return bodyFatPercentage
      }
      if (this.user.gender === 'female') {
        if (this.user.hip) {
          const heightFactor = 97.684 * Math.log10(heightInCentimeter)
          const waistHipNeckFactor =
            163.205 *
            Math.log10(this.user.waist + this.user.hip - this.user.neck)
          const constantFactor = 78.387

          const bodyFatPercentage =
            waistHipNeckFactor - heightFactor - constantFactor
          return bodyFatPercentage
        } else {
          console.warn(
            'If the user is a female, hip value is required for calculateBodyFatPercantage method'
          )
          return NaN
        }
      }
    } else {
      console.warn(
        'Waist and neck is required for calculateBodyFatPercanteage method'
      )
      return NaN
    }
    return NaN
  }

  // calculateWaistToHeightRatio(): number {}
}

// TODO: senare versioner, lägg till Tdee med bmr benedtict
// TODO: gå ingeom metoderna, fett procent är ganska stor, flytta över något till validate?
// TODO: lägg in en gemensam hjälpfunktion heightToCentimeter?
// TODO: Lägg in JSDoc, input och return
