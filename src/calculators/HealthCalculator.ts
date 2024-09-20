// BMI = vikt kg / (längd m)^2
// import { BmiType, bmiRanges } from '../enums/constants'

import { InterfaceHealthCalculation } from '../interfaces/InterfaceHealthCalculation'
import { User } from '../models/User'
import { validateUserInput } from '../utils/validateUserObject'
import { convertUserToMetric } from '../utils/unitConverter'
import { copyUser } from '../utils/copyUser'

export class HealthCalculator implements InterfaceHealthCalculation {
  private user: User

  constructor(user: User) {
    validateUserInput(user)
    const userCopy = copyUser(user)
    // TODO: reflektera över namnet nedan
    this.user = convertUserToMetric(userCopy) as User
  }
  calculateBmi(): number {
    return this.user.weight / Math.pow(this.user.height, 2)
  }

  // calculateBmiType(): string {}
  // calculateBmiPrime(): number {}
  // calculateBmr(): number {}
  // calculateTdee(): number {}
  // calculateIdealWeight(): number {}
  // calculateBodyFatPercentage(): number {}
  // calculateWaistToHipRatio(): number {}
  // calculateWaistToHeightRatio(): number {}
}
