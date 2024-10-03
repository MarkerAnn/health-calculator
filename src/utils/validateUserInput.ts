/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'

export function validateUserInput(user: User): void {
  try {
    validateNumericFields(user)
    validateWeight(user)
    validateHeight(user)
    validateGender(user)
    validateAge(user)
    validateActivityLevel(user)
    validateUnitSystem(user)
    validateDailyCalories(user)
    validateWeightGoal(user)
    validateWeeksToWeightGoal(user)
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

function validateUnitSystem(user: User) {
  if (typeof user.unitSystem !== 'string') {
    throw new TypeError(
      `Unit system must be a string. Check the unitSystem value in ${JSON.stringify(
        user
      )}`
    )
  }
  if (user.unitSystem === undefined) {
    throw new Error(
      `Unit system is required, imperial or metric. Check the unitSystem value in ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateWeight(user: User) {
  if (user.weight === undefined || typeof user.weight !== 'number') {
    throw new Error(
      `Weight is required and must be a number. Check the weight value in ${JSON.stringify(user)}`
    )
  }
  if (user.unitSystem === 'metric') {
    if (user.weight < 0 || user.weight > 700) {
      throw new RangeError(
        `Weight using the metric system must be between 0-700 kg. Check the weight value in ${JSON.stringify(
          user
        )}`
      )
    }
  } else {
    if (user.weight < 0 || user.weight > 1543) {
      throw new RangeError(
        `Weight using the imperial system must be between 0-1543 lbs. Check the weight value in ${JSON.stringify(
          user
        )}`
      )
    }
  }
}

function validateHeight(user: User) {
  if (user.height === undefined || typeof user.height !== 'number') {
    throw new Error(
      `Height is required and must be a number. Check the height value in ${JSON.stringify(user)}`
    )
  }
  if (user.unitSystem === 'metric') {
    if (user.height <= 0 || user.height >= 2.5) {
      throw new RangeError(
        `Height using the metric system must be between 0-2.5 meters. Check the height value in ${JSON.stringify(
          user
        )}`
      )
    }
  } else {
    if (user.height < 0 || user.height > 8.2) {
      throw new RangeError(
        `Height using the imperial system must be between 0-8.2 feet. Check the height value in ${JSON.stringify(
          user
        )}`
      )
    }
  }
}

function validateGender(user: User) {
  if (user.gender === undefined) {
    return
  }
  if (user.gender !== 'male' && user.gender !== 'female') {
    throw new TypeError(
      `Gender must be male or female. Check the gender value in ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateAge(user: User) {
  if (user.age === undefined) {
    return
  }
  if (user.age < 18) {
    console.warn(
      `Warning: health calculation might not be accurate for individuals under 18 years old. Check the age value in ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateActivityLevel(user: User) {
  if (user.activityLevel === undefined) {
    return
  }
  if (
    user.activityLevel != 'sedentary' &&
    user.activityLevel != 'lightly' &&
    user.activityLevel != 'moderately' &&
    user.activityLevel != 'very' &&
    user.activityLevel != 'extremely'
  ) {
    throw new TypeError(
      `Activity level must be sedentary, lightly, moderately, very or extremely. Check the activityLevel value in ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateDailyCalories(user: User) {
  if (user.dailyCalories === undefined) {
    return
  }
  if (user.dailyCalories < 0)
    throw new Error(
      `Daily calories can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt - ${JSON.stringify(
        user
      )}`
    )
}

function validateWeightGoal(user: User) {
  if (user.weightGoal === undefined) {
    return
  }
  if (user.weightGoal < 0) {
    throw new Error(
      `The weight goal can't be 0, leave the field empty if you don't want to use calorie calculation. User objekt- ${JSON.stringify(
        user
      )}`
    )
  }
}

function validateWeeksToWeightGoal(user: User) {
  if (user.weeksToWeightGoal === undefined) {
    return
  }
  if (user.weeksToWeightGoal < 0) {
    throw new Error(
      `Weeks to reach weight goal must be equal or greater than 0. User objekt- ${JSON.stringify(
        user
      )}`
    )
  }
}
