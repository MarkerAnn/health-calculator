/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'

export function convertUserToMetric(user: User) {
  if (user.unitSystem === 'metric') {
    return user
  } else {
    return {
      ...user,
      height: feetToMeters(user.height),
      weight: lbsToKg(user.weight),
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

function feetToMeters(feet: number): number {
  return feet * 0.3048
}

function lbsToKg(lbs: number): number {
  return lbs * 0.453592
}

function inchesToCentimeters(inches: number): number {
  return inches * 2.54
}
