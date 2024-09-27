/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User'
import { InterfaceHealthCalculator } from '../interfaces/InterfaceHealthCalculator'
import { HealthCalculator } from '../calculators/HealthCalculator'
import { BmiCalculator } from '../calculators/BmiCalculator'
import { BodyCompositionCalculator } from '../calculators/BodyCompositionCalculator'
import { BmrCalculator } from '../calculators/BmrCalculator'
import { TdeeCalculator } from '../calculators/TdeeCalculator'
import { validateUserInput } from '../utils/validateUserInput'
import { copyUser } from '../utils/copyUser'
import { convertUserToMetric } from '../utils/unitConverter'

/**
 * Factory class for creating HealthCalculator instances.
 * This class encapsulates the creation logic for HealthCalculator objects,
 * including input validation and unit conversion.
 */
export class HealthCalculatorFactory {
  /**
   * Creates and returns a new HealthCalculator instance.
   *
   * @param user - The user data for which to create a HealthCalculator.
   * @returns A new instance of InterfaceHealthCalculator.
   * @throws Will throw an error if user input validation fails.
   */
  static createHealthCalculator(user: User): InterfaceHealthCalculator {
    validateUserInput(user)
    const userCopy = copyUser(user)
    const metricUser = convertUserToMetric(userCopy) as User

    const bmiCalculator = new BmiCalculator()
    const bodyCompositionCalculator = new BodyCompositionCalculator()
    const bmrCalculator = new BmrCalculator()
    const tdeeCalculator = new TdeeCalculator()

    return new HealthCalculator(
      metricUser,
      bmiCalculator,
      bodyCompositionCalculator,
      bmrCalculator,
      tdeeCalculator
    )
  }
}
