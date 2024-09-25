// // testData.ts

// import { User } from '../models/User'

// export const adamUser: User = {
//   weight: 70,
//   height: 1.75,
//   age: 30,
//   gender: 'male',
//   unitSystem: 'metric',
//   activityLevel: 'moderately',
// }

// export const beatriceUser: User = {
//   weight: 154,
//   height: 5.74,
//   age: 40,
//   gender: 'female',
//   unitSystem: 'imperial',
//   activityLevel: 'lightly',
// }

// export const CeasarUnderweightUser: User = {
//   weight: 50,
//   height: 1.75,
//   age: 60,
//   gender: 'male',
//   unitSystem: 'metric',
//   activityLevel: 'very',
// }

// export const DianaOverweightUser: User = {
//   weight: 90,
//   height: 1.75,
//   age: 18,
//   gender: 'female',
//   unitSystem: 'metric',
//   activityLevel: 'extremely',
// }

// export const outOfRangeBmiMetricUser: User = {
//   weight: 600,
//   height: 1.5,
//   gender: 'male',
//   unitSystem: 'metric',
// }

// export const outOfRangeBmiImperialUser: User = {
//   weight: 1322,
//   height: 3.28,
//   age: 52,
//   gender: 'female',
//   unitSystem: 'imperial',
// }

// export const bmiInvalidWeightValuesMetricUser: User = {
//   weight: -10,
//   height: 2,
//   unitSystem: 'metric',
// }

// export const bmiInvalidWeightValuesImperialUser: User = {
//   weight: -10,
//   height: 2,
//   unitSystem: 'imperial',
// }

// // TODO. reflektera över namngivning
// // TODO: testa under 18
// testData.ts

// testData.ts

// testData.ts

import { User } from '../models/User'

export const testUsers: { [key: string]: User } = {
  // Metric Users
  normalWeightMaleMetric: {
    weight: 70,
    height: 1.75,
    age: 30,
    gender: 'male',
    waist: 80,
    hip: 95,
    neck: 37,
    unitSystem: 'metric',
    activityLevel: 'moderately',
  },
  overweightFemaleMetric: {
    weight: 75,
    height: 1.65,
    age: 35,
    gender: 'female',
    waist: 85,
    hip: 100,
    neck: 34,
    unitSystem: 'metric',
    activityLevel: 'sedentary',
  },

  // Imperial Users
  underweightMaleImperial: {
    weight: 121, // lbs
    height: 5.9, // feet
    age: 25,
    gender: 'male',
    waist: 29.5, // inches
    hip: 35.4, // inches
    neck: 13.8, // inches
    unitSystem: 'imperial',
    activityLevel: 'very',
  },
  obeseFemaleImperial: {
    weight: 198, // lbs
    height: 5.25, // inches
    age: 40,
    gender: 'female',
    waist: 37.4, // inches
    hip: 43.3, // inches
    neck: 14.2, // inches
    unitSystem: 'imperial',
    activityLevel: 'lightly',
  },

  // Invalid Users (for negative testing)
  invalidUserMissingRequired: {
    weight: 70,
    unitSystem: 'metric',
  } as User, // Type assertion to bypass TypeScript errors

  invalidUserNegativeValues: {
    weight: -70,
    height: -1.75,
    age: -30,
    gender: 'male',
    waist: -80,
    hip: -95,
    neck: -37,
    unitSystem: 'metric',
    activityLevel: 'moderately',
  },

  invalidUserWrongUnitSystem: {
    weight: 70,
    height: 1.75,
    unitSystem: 'wrong' as 'metric' | 'imperial', // Type assertion to bypass TypeScript errors
  },

  invalidUserWrongGender: {
    weight: 70,
    height: 1.75,
    gender: 'other' as 'male' | 'female', // Type assertion to bypass TypeScript errors
    unitSystem: 'metric',
  },

  invalidUserWrongActivityLevel: {
    weight: 70,
    height: 1.75,
    unitSystem: 'metric',
    activityLevel: 'super' as
      | 'sedentary'
      | 'lightly'
      | 'moderately'
      | 'very'
      | 'extremely', // Type assertion to bypass TypeScript errors
  },
}
