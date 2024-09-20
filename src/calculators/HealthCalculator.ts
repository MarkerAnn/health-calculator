// BMI = vikt kg / (längd m)^2
// import { BmiType, bmiRanges } from '../enums/constants'

import { InterfaceHealthCalculation } from '../interfaces/InterfaceHealthCalculation'
import { User } from '../models/User'
import { validateUserInput } from '../utils/validateUserObject'

export class HealthCalculator implements InterfaceHealthCalculation {
  private user: User

  constructor(user: User) {
    this.user = user // TODO: Skicka till konverterare direkt här? Då är mätvärdena klara införa metoderna
    validateUserInput(user)
    const convertedUserToMetric =
  }
  calculateBmi: number

  // calculateBmiType(): string {}
  // calculateBmiPrime(): number {}
  // calculateBmr(): number {}
  // calculateTdee(): number {}
  // calculateIdealWeight(): number {}
  // calculateBodyFatPercentage(): number {}
  // calculateWaistToHipRatio(): number {}
  // calculateWaistToHeightRatio(): number {}
}
