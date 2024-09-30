/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User'

export function validateUserInput(user: User): void {
  try {
    validateNumericFields(user)
    validateWeight(user.weight, user.unitSystem, user)
    validateHeight(user.height, user.unitSystem, user)
    validateGender(user.gender, user)
    validateAge(user.age, user)
    validateActivityLevel(user.activityLevel, user)
    validateUnitSystem(user.unitSystem, user)
    validateDailyCalories(user.dailyCalories, user)
    validateWeightGoal(user.weightGoal, user)
    validateWeeksToWeightGoal(user.weeksToWeightGoal, user)
    console.log('Validation succeeded!')
  } catch (error) {
    const errorMessage = `Validation error in user object: ${JSON.stringify(
      user
    )} - ${(error as Error).message}`
    throw new Error(errorMessage)
  }
}

function validateNumericFields(user: User): void {
  const numericFields: (keyof User)[] = [
    'age',
    'waist',
    'hip',
    'neck',
    'dailyCalories',
    'weightGoal',
    'weeksToWeightGoal',
  ]
  numericFields.forEach((field) => {
    if (field in user && user[field] !== undefined) {
      if (typeof user[field] !== 'number') {
        throw new TypeError(`${field} must be a number if provided`)
      }
    }
  })
}

function validateUnitSystem(unitSystem: 'metric' | 'imperial', user: User) {
  if (typeof unitSystem !== 'string') {
    throw new TypeError(
      `Unit system must be a string. Check the unitSystem value in ${JSON.stringify(
        user
      )}`
    )
  }
  if (unitSystem === undefined) {
    throw new Error(
      `Unit system is required, imperial or metric. Check the unitSystem value in ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateWeight(
  weight: number,
  unitSystem: 'metric' | 'imperial',
  user: User
) {
  if (weight === undefined && typeof weight !== 'number') {
    throw new Error(
      `Weight is required and must be a number. Check the weight value in ${JSON.stringify(user)}`
    )
  }
  if (unitSystem === 'metric') {
    if (weight < 0 || weight > 700) {
      throw new RangeError(
        `Weight using the metric system must be between 0-700 kg. Check the weight value in ${JSON.stringify(
          user
        )}`
      )
    }
  } else {
    if (weight < 0 || weight > 1543) {
      throw new RangeError(
        `Weight using the imperial system must be between 0-1543 lbs. Check the weight value in ${JSON.stringify(
          user
        )}`
      )
    }
  }
}

function validateHeight(
  height: number,
  unitSystem: 'metric' | 'imperial',
  user: User
) {
  if (height === undefined && typeof height !== 'number') {
    throw new Error(
      `Height is required and must be a number. Check the height value in ${JSON.stringify(user)}`
    )
  }
  if (unitSystem === 'metric') {
    if (height <= 0 || height >= 2.5) {
      throw new RangeError(
        `Height using the metric system must be between 0-2.5 meters. Check the height value in ${JSON.stringify(
          user
        )}`
      )
    }
  } else {
    if (height < 0 || height > 8.2) {
      throw new RangeError(
        `Height using the imperial system must be between 0-8.2 feet. Check the height value in ${JSON.stringify(
          user
        )}`
      )
    }
  }
}

function validateGender(gender?: 'male' | 'female', user?: User) {
  if (gender === undefined) {
    return
  }
  if (gender !== 'male' && gender !== 'female') {
    throw new TypeError(
      `Gender must be male or female. Check the gender value in ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateAge(age?: number, user?: User) {
  if (age === undefined) {
    return
  }
  if (age < 18) {
    console.warn(
      `Warning: health calculation might not be accurate for individuals under 18 years old. Check the age value in ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateActivityLevel(
  activityLevel?: 'sedentary' | 'lightly' | 'moderately' | 'very' | 'extremely',
  user?: User
) {
  if (activityLevel === undefined) {
    return
  }
  if (
    activityLevel != 'sedentary' &&
    activityLevel != 'lightly' &&
    activityLevel != 'moderately' &&
    activityLevel != 'very' &&
    activityLevel != 'extremely'
  ) {
    throw new TypeError(
      `Activity level must be sedentary, lightly, moderately, very or extremely. Check the activityLevel value in ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateDailyCalories(dailyCalories?: number, user?: User) {
  if (dailyCalories === undefined) {
    return
  }
  if (dailyCalories < 0)
    throw new Error(
      `Daily calories can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt - ${JSON.stringify(
        user
      )}`
    )
}

function validateWeightGoal(weightGoal?: number, user?: User) {
  if (weightGoal === undefined) {
    return
  }
  if (weightGoal > 0) {
    throw new Error(
      `The weight goal can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt- ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateWeeksToWeightGoal(weeks?: number, user?: User) {
  if (weeks === undefined) {
    return
  }
  if (weeks < 0) {
    throw new Error(
      `Weeks to reach weight goal must be equal or greater than 0. User objekt- ${JSON.stringify(
        user
      )}`
    )
  }
}
