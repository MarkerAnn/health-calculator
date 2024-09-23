// testData.ts

import { User } from '../models/User'

export const adamUser: User = {
  weight: 70,
  height: 1.75,
  age: 30,
  gender: 'male',
  unitSystem: 'metric',
  activityLevel: 'moderately',
}

export const beatriceUser: User = {
  weight: 154,
  height: 5.74,
  age: 40,
  gender: 'female',
  unitSystem: 'imperial',
  activityLevel: 'lightly',
}

export const CeasarUnderweightUser: User = {
  weight: 50,
  height: 1.75,
  age: 60,
  gender: 'male',
  unitSystem: 'metric',
  activityLevel: 'very',
}

export const DianaOverweightUser: User = {
  weight: 90,
  height: 1.75,
  age: 18,
  gender: 'female',
  unitSystem: 'metric',
  activityLevel: 'extremely',
}

export const outOfRangeBmiMetricUser: User = {
  weight: 600,
  height: 1.5,
  gender: 'male',
  unitSystem: 'metric',
}

export const outOfRangeBmiImperialUser: User = {
  weight: 1322,
  height: 3.28,
  age: 52,
  gender: 'female',
  unitSystem: 'imperial',
}

export const bmiInvalidWeightValuesMetricUser: User = {
  weight: -10,
  height: 2,
  unitSystem: 'metric',
}

export const bmiInvalidWeightValuesImperialUser: User = {
  weight: -10,
  height: 2,
  unitSystem: 'imperial',
}

// TODO. reflektera över namngivning
// TODO: testa under 18
