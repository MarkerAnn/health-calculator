import { User } from '../models/User'

export function validateUserInput(user: User): void {
  try {
    validateWeight(user.weight, user.unitSystem, user)
    validateHeight(user.height, user.unitSystem, user)
    validateGender(user.gender, user)
    validateAge(user.age, user)
    validateActivityLevel(user.activityLevel, user)
    validateUnitSystem(user.unitSystem, user)
    console.log('Validation succeeded!')
  } catch (error) {
    const errorMessage = `Validation error in user object: ${JSON.stringify(
      user
    )} - ${(error as Error).message}`
    throw new Error(errorMessage)
  }
}

function validateUnitSystem(unitSystem: 'metric' | 'imperial', user: User) {
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
  if (weight === undefined) {
    throw new Error(
      `Weight is required. Check the weight value in ${JSON.stringify(user)}`
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
  if (height === undefined) {
    throw new Error(
      `Height is required. Check the height value in ${JSON.stringify(user)}`
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

// TODO: nästlade for-loopar !!
// TODO: Warning age används inte i BMI
// TODO: Vad är best practice, att bryta vid felaktigt värde eller att köra vidare med ett rangeError samt det orimliga värdet som kommer med?
// TODO: private functions?
