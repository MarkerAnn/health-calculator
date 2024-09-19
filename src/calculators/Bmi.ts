// BMI = vikt kg / (längd m)^2
import { BmiType, bmiRanges } from '../enums/constants'

export function calculateBmi(weight: number, height: number): BmiType {
  const bmi = weight / Math.pow(height, 2)
  const bmiType = bmiRanges.find(
    (range) => bmi >= range.min && bmi <= range.max
  )?.type
  if (!bmiType) {
    throw new Error('Invalid BMI')
  }
  return bmiType
}
