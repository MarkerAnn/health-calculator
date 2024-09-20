// if user user.unitSystem === imperial
import { User } from '../models/User'

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

// TODO: namngivningen, förkortar lbs och kg, men inte meters och centimeter, reflektera
