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

export class HealthCalculatorFactory {
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
