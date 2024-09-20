// if user user.unitSystem === imperial
import { User } from '../models/User'

export function convertUserToMetric(user: User) {
  if (user.unitSystem === 'imperial') {
    feetToMeters(user.height)
    lbsToKg(user.weight)

    if (user.waist !== undefined) {
      inchesToCentimeters(user.waist)
    }
    if (user.hip !== undefined) {
      inchesToCentimeters(user.hip)
    }
  } else {
    return
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
