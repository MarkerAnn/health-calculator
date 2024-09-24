import { InterfaceBmiCalculator } from '../interfaces/InterfaceBmiCalculator'
import { User } from '../models/User'
import { BmiType, bmiRanges } from '../enums/constants'

export class BmiCalculator implements InterfaceBmiCalculator {
  calculateBmi(user: User): number {
    const bmi = user.weight / Math.pow(user.height, 2)
    return bmi
  }

  calculateBmiType(bmi: number): string {
    for (const range of bmiRanges) {
      if (bmi >= range.min && bmi <= range.max) {
        return range.type
      }
    }
    return 'BMI out of range. Please check you values.'
  }

  calculateIdealWeight(user: User): [number, number] {
    const normalBmiRange = bmiRanges.find(
      (range) => range.type === BmiType.Normal
    )

    if (normalBmiRange) {
      const minNormalBmi = normalBmiRange.min
      const maxNormalBmi = normalBmiRange.max

      const minIdealWeight = minNormalBmi * Math.pow(user.height, 2)
      const maxIdealWeight = maxNormalBmi * Math.pow(user.height, 2)

      return [minIdealWeight, maxIdealWeight]
    } else {
      throw new Error(
        'Could not find BMI range, check User object height value'
      )
    }
  }
}
