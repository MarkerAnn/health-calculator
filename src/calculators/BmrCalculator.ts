import { User } from '../models/User'
import { InterfaceBmrCalculator } from '../interfaces/InterfaceBmrCalculator'

export class bmrCalculator implements InterfaceBmrCalculator {
  calculateBmrHarrisBenedict(user: User): number {
    if (!user.age) {
      throw new Error('Age is required for calculateBmRHarrisBenedict method')
    }
    const heightInCentimeter = user.height * 100

    if (user.gender === 'male') {
      const weightFactor = 13.397 * user.weight
      const lengthFactor = 4.799 * heightInCentimeter
      const ageFactor = 5.677 * user.age

      const bmrMale = 88.362 + weightFactor + lengthFactor - ageFactor

      return bmrMale
    } else if (user.gender === 'female') {
      const weightFactor = 9.247 * user.weight
      const lengthFactor = 3.098 * heightInCentimeter
      const ageFactor = 4.33 * user.age

      const bmrFemale = 447.593 + weightFactor + lengthFactor - ageFactor
      console.log('bmrFemale:', user)

      return bmrFemale
    } else {
      throw new Error(
        "Invalid gender, Gender must be either 'male' or 'female'. "
      )
    }
  }

  calculateBmrMifflinStJeor(user: User): number {
    if (user.age) {
      const heightInCentimeter = user.height * 100
      const weightFactor = 10 * user.weight
      const heightFactor = 6.25 * heightInCentimeter
      const ageFactor = 5 * user.age
      const genderComponent = user.gender === 'male' ? 5 : -161
      const bmr = weightFactor + heightFactor - ageFactor + genderComponent

      return bmr
    } else {
      throw new Error('Age is required for calculateBmrMifflinStJeor method')
    }
  }
}
