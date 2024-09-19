// BMI = vikt kg / (längd m)^2
// import { BmiType, bmiRanges } from '../enums/constants'

import { InterfaceHealthCalculation } from '../interfaces/InterfaceHealthCalculation'
import { User } from '../models/User'

// export function calculateBmi(weight: number, height: number): BmiType {
//   const bmi = weight / Math.pow(height, 2)
//   const bmiType = bmiRanges.find(
//     (range) => bmi >= range.min && bmi <= range.max
//   )?.type
//   if (!bmiType) {
//     throw new Error('Invalid BMI')
//   }
//   return bmiType
// }

class HealthCalculator implements InterfaceHealthCalculation {
  private user: User

  constructor(user: User) {
    this.user = user // TODO: Skicka till konverterare direkt här? Då är mätvärdena klara införa metoderna
  }
  calculateBmi(): number {}
  // calculateBmiType(): string {}
  // calculateBmiPrime(): number {}
  // calculateBmr(): number {}
  // calculateTdee(): number {}
  // calculateIdealWeight(): number {}
  // calculateBodyFatPercentage(): number {}
  // calculateWaistToHipRatio(): number {}
  // calculateWaistToHeightRatio(): number {}
}
