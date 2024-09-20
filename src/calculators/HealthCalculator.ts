// BMI = vikt kg / (längd m)^2
// import { BmiType, bmiRanges } from '../enums/constants'

import { InterfaceHealthCalculation } from '../interfaces/InterfaceHealthCalculation'
import { User } from '../models/User'
import { validateUserInput } from '../utils/validateUserObject'
import { convertUserToMetric } from '../utils/unitConverter'
import { copyUser } from '../utils/copyUser'
import { bmiRanges } from '../enums/constants'

export class HealthCalculator implements InterfaceHealthCalculation {
  private user: User

  constructor(user: User) {
    validateUserInput(user)
    const userCopy = copyUser(user)
    // TODO: reflektera över namnet nedan.
    this.user = convertUserToMetric(userCopy) as User
  }
  calculateBmr(): number {
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
        return bmrFemale
      }
    }
    return NaN
  }

  // For men: BMR = 66.5 + (13.75 × weight in kg) + (5.003 × height in cm) - (6.75 × age)

  // For women: BMR = 655.1 + (9.563 × weight in kg) + (1.850 × height in cm) - (4.676 × age)

  // calculateTdee(): number {}
  // calculateIdealWeight(): number {}
  // calculateBodyFatPercentage(): number {}
  // calculateWaistToHipRatio(): number {}
  // calculateWaistToHeightRatio(): number {}
}
