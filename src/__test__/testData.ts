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
    weight: 121,
    height: 5.9,
    age: 25,
    gender: 'male',
    waist: 29.5,
    hip: 35.4,
    neck: 13.8,
    unitSystem: 'imperial',
    activityLevel: 'very',
  },
  obeseFemaleImperial: {
    weight: 198,
    height: 5.25,
    age: 40,
    gender: 'female',
    waist: 37.4,
    hip: 43.3,
    neck: 14.2,
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
