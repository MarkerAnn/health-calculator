import { User } from '../models/User'

export interface InterfaceBmrCalculator {
  calculateBmrHarrisBenedict(user: User): number
  calculateBmrMifflinStJeor(user: User): number
}
