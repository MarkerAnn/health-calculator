import { User } from '../models/User'

export function validateUserInput(user: User): void {
  try {
    validateWeight(user.weight, user.unitSystem)
    validateHeight(user.height, user.unitSystem)
    validateGender(user.gender)
    validateAge(user.age)
    validateActivityLevel(user.activityLevel)
    validateUnitSystem(user.unitSystem)
    console.log('Validation succeed!')
  } catch (error) {
    console.error(`Validation error: ${(error as Error).message}`)
  }
}

function validateUnitSystem(unitSystem: 'metric' | 'imperial') {
  if (unitSystem === undefined)
    throw new Error('Unit system is required, imperial pr metric')
}

function validateWeight(weight: number, unitSystem: 'metric' | 'imperial') {
  if (weight === undefined) {
    throw new Error('Weight is required')
  }
  if (unitSystem === 'metric') {
    if (weight < 0 || weight > 700) {
      throw new RangeError(
        'Weight using the metric system must be between 0-700 kg'
      )
    }
  } else {
    if (weight < 0 || weight > 1543) {
      throw new RangeError(
        'Weight using the imperial system must be between 0-1543 lbs'
      )
    }
  }
}

function validateHeight(height: number, unitSystem: 'metric' | 'imperial') {
  if (height === undefined) {
    throw new Error('height is required')
  }
  if (unitSystem === 'metric') {
    if (height < 0 || height > 2.5) {
      throw new RangeError(
        'height using the metric system must be between 0-2.5 meters'
      )
    }
  } else {
    if (height < 0 || height > 8.2) {
      throw new RangeError(
        'height using the imperial system must be between 0-8.2 feet'
      )
    }
  }
}

function validateGender(gender?: 'male' | 'female') {
  if (gender === undefined) {
    return
  }
  if (gender !== 'male' && gender !== 'female')
    throw new TypeError('Gender must be male or female')
}

function validateAge(age?: number) {
  if (age === undefined) {
    return
  }
  if (age < 18) {
    console.warn(
      'Warning: health calculation might not be accurate for individuals under 18 years old'
    )
  }
}

function validateActivityLevel(
  activityLevel?: 'sedentary' | 'lightly' | 'moderately' | 'very' | 'extremely'
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
      'activity level must be sedentary, lightly, moderately, very or extremely'
    )
  }
}

// TODO: nästlade for-loopar !!
