/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

// Standard BMI (WHO)
export enum BmiType {
  UnderweightSevereThinness = 'underweight, severe thinness',
  UnderweightModerateThinness = 'underweight, moderate thinness',
  UnderweightMildThinness = 'underweight, mild thinness',
  Normal = 'normal weight',
  Overweight = 'overweight, pre-obese',
  ObeseFirstGrade = 'obese, class I',
  ObeseSecondGrade = 'obese, class II',
  ObeseThirdGrade = 'obese, class III',
}

interface BmiRange {
  min: number
  max: number
  type: BmiType
}

export const bmiRanges: BmiRange[] = [
  { min: 0, max: 15.9, type: BmiType.UnderweightSevereThinness },
  { min: 16, max: 16.9, type: BmiType.UnderweightModerateThinness },
  { min: 17, max: 18.4, type: BmiType.UnderweightMildThinness },
  { min: 18.5, max: 24.9, type: BmiType.Normal },
  { min: 25, max: 29.9, type: BmiType.Overweight },
  { min: 30, max: 34.9, type: BmiType.ObeseFirstGrade },
  { min: 35, max: 39.9, type: BmiType.ObeseSecondGrade },
  { min: 40, max: 100, type: BmiType.ObeseThirdGrade },
]

export enum ActivityLevel {
  Sedentary = 'sedentary',
  Lightly = 'lightly',
  Moderately = 'moderately',
  Very = 'very',
  Extremely = 'extremely',
}
