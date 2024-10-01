/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'
import { InterfaceHealthCalculator } from '../interfaces/InterfaceHealthCalculator.js'
import { HealthCalculator } from '../calculators/HealthCalculator.js'
import { BmiCalculator } from '../calculators/BmiCalculator.js'
import { BodyCompositionCalculator } from '../calculators/BodyCompositionCalculator.js'
import { BmrCalculator } from '../calculators/BmrCalculator.js'
import { TdeeCalculator } from '../calculators/TdeeCalculator.js'
import { validateUserInput } from '../utils/validateUserInput.js'
import { copyUser } from '../utils/copyUser.js'
import { convertUserToMetric } from '../utils/unitConverter.js'
import { CalorieCalculator } from '../calculators/CalorieCalculator.js'

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
    const calorieCalculator = new CalorieCalculator()

    return new HealthCalculator(
      metricUser,
      bmiCalculator,
      bodyCompositionCalculator,
      bmrCalculator,
      tdeeCalculator,
      calorieCalculator
    )
  }
}
