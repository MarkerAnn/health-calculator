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

// BMI Prime (ratio to upper normal BMI of 24.9)
// < 0.64 underweight, severe thinness
// 0.64-0.67 underweight, Moderate thinness
// 0.68-0.73 underweight, Mild thinness
// 0.74-0.99 Normal
// 1.00-1.19 Overweight, pre-obese
// 1.20-1.39 Obese class I
// 1.40-1.59 Obese class II
// >= 1.60 Obese class III

// Hong Kong BMI
// < 18.5 Underweight (Unhealthy)
// 18.5-22.9 Normal range (Healthy)
// 23.0-24.9 Overweight I (At risk)
// 25.0-29.9 Overweight II (Moderately obese)
// >= 30 Overweight III (Severely obese)

// Japan BMI
// < 18.5 Underweight (Thin)
// 18.5-24.9 Normal weight
// 25.0-29.9 Obesity (Class 1)
// 30.0-34.9 Obesity (Class 2)
// 35.0-39.9 Obesity (Class 3)
// >= 40 Obesity (Class 4)

// Singapore BMI
// < 18.5 Underweight (Possible nutritional deficiency and osteoporosis)
// 18.5-22.9 Normal (Low risk, healthy range)
// 23.0-27.4 Mild to moderate overweight (Moderate risk of heart disease, high blood pressure, stroke, diabetes mellitus)
// >= 27.5 Very overweight to obese (High risk of heart disease, high blood pressure, stroke, diabetes mellitus, metabolic syndrome)

// United Kingdom BMI (NICE Guidance for diabetes prevention)
// General population:
// < 18.5 Underweight
// 18.5-24.9 Normal
// 25.0-29.9 Overweight
// >= 30 Obese
// Black African, African-Caribbean, South Asian, and Chinese populations:
// < 18.5 Underweight
// 18.5-24.9 Normal
// 25.0-27.4 Overweight
// >= 27.5 Obese (increased diabetes risk)
