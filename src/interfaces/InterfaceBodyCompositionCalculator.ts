import { User } from '../models/User'
export interface InterfaceBodyCompositionCalculator {
  calculateWaistToHipRatio(user: User): number
  calculateWaistToHeightRatio(user: User): number
  calculateBodyFatPercentage(user: User): number
}
