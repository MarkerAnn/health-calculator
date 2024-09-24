import { User } from '../models/User'

export interface InterfaceTdeeCalculator {
  calculateTdeeMifflinStJeor(user: User, bmrMifflinStJeor: number): number
  calculateTdeeHarrisBenedict(user: User, bmrHarrisBenedict: number): number
}
