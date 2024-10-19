/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'

export function convertUserToMetric(user: User): User {
  if (user.unitSystem === 'metric') {
    return user
  } else {
    return {
      ...user,
      height: user.height !== undefined ? feetToMeters(user.height) : undefined,
      weight: user.weight !== undefined ? lbsToKg(user.weight) : undefined,
      waist:
        user.waist !== undefined ? inchesToCentimeters(user.waist) : undefined,
      hip: user.hip !== undefined ? inchesToCentimeters(user.hip) : undefined,
      neck:
        user.neck !== undefined ? inchesToCentimeters(user.neck) : undefined,
      weightGoal:
        user.weightGoal !== undefined ? lbsToKg(user.weightGoal) : undefined,
      unitSystem: 'metric',
    }
  }
}

function feetToMeters(feet: number | undefined): number | undefined {
  return feet !== undefined ? feet * 0.3048 : undefined
}

function lbsToKg(lbs: number | undefined): number | undefined {
  return lbs !== undefined ? lbs * 0.453592 : undefined
}

function inchesToCentimeters(inches: number | undefined): number | undefined {
  return inches !== undefined ? inches * 2.54 : undefined
}
