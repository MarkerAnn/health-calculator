import { User } from '../models/User'
import { InterfaceTdeeCalculator } from '../interfaces/InterfaceTdeeCalculator'

export class TdeeCalculator implements InterfaceTdeeCalculator {
  calculateTdeeMifflinStJeor(user: User, bmrMifflinStJeor: number): number {
    if (user.age && user.activityLevel) {
      const bmr = bmrMifflinStJeor
      let activityFactor = 0
      if (user.activityLevel === 'sedentary') {
        activityFactor = 1.2
      } else if (user.activityLevel === 'lightly') {
        activityFactor = 1.375
      } else if (user.activityLevel === 'moderately') {
        activityFactor = 1.55
      } else if (user.activityLevel === 'very') {
        activityFactor = 1.725
      } else if (user.activityLevel === 'extremely') {
        activityFactor = 1.9
      }
      const tdee = bmr * activityFactor
      return tdee
    } else {
      throw new Error(
        'Age and activity level is required for calculateTdeeMifflinStJeor method'
      )
    }
  }

  calculateTdeeHarrisBenedict(user: User, bmrHarrisBenedict: number): number {
    if (user.age && user.activityLevel) {
      const bmr = bmrHarrisBenedict
      let activityFactor = 0
      if (user.activityLevel === 'sedentary') {
        activityFactor = 1.2
      } else if (user.activityLevel === 'lightly') {
        activityFactor = 1.375
      } else if (user.activityLevel === 'moderately') {
        activityFactor = 1.55
      } else if (user.activityLevel === 'very') {
        activityFactor = 1.725
      } else if (user.activityLevel === 'extremely') {
        activityFactor = 1.9
      }
      const tdee = bmr * activityFactor
      return tdee
    } else {
      throw new Error(
        'Age and activity level is required for calculateTdeeHarrisBenedict method'
      )
    }
  }
}

// TODO: DRY!!!!!
