import { User } from '../models/User.js'

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

  //***************** TestData with more properties in User object ******************/
  userWithValidGoals: {
    weight: 70,
    height: 1.75,
    unitSystem: 'metric',
    dailyCalories: 2000,
    weightGoal: 65,
    weeksToWeightGoal: 12,
  },

  userWithInvalidDailyCalories: {
    weight: 70,
    height: 1.75,
    unitSystem: 'metric',
    dailyCalories: -500,
  },

  userWithInvalidWeightGoal: {
    weight: 70,
    height: 1.75,
    unitSystem: 'metric',
    weightGoal: -5,
  },

  userWithInvalidWeeksToWeightGoal: {
    weight: 70,
    height: 1.75,
    unitSystem: 'metric',
    weeksToWeightGoal: -2,
  },

  // Testdata for typeError
  userWithNonNumericWeight: {
    weight: '70' as any, // Type assertion to bypass TypeScript errors
    height: 1.75,
    unitSystem: 'metric',
  },

  userWithNonNumericHeight: {
    weight: 70,
    height: '1.75' as any, // Type assertion to bypass TypeScript errors
    unitSystem: 'metric',
  },

  userWithNonNumericFields: {
    weight: 70,
    height: 1.75,
    unitSystem: 'metric',
    age: '30' as any,
    waist: '80' as any,
    hip: '95' as any,
    neck: '37' as any,
    dailyCalories: '2000' as any,
    weightGoal: '65' as any,
    weeksToWeightGoal: '12' as any,
  },
}
