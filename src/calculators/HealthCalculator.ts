import { User } from '../models/User'
import { InterfaceBmiCalculator } from '../interfaces/InterfaceBmiCalculator'
import { InterfaceBodyCompositionCalculator } from '../interfaces/InterfaceBodyCompositionCalculator'
import { InterfaceBmrCalculator } from '../interfaces/InterfaceBmrCalculator'
export class HealthCalculator {
  constructor(
    private user: User,
    private bmiCalculator: InterfaceBmiCalculator,
    private bodycompositionCalculator: InterfaceBodyCompositionCalculator,
    private bmrCalculator: InterfaceBmrCalculator
  ) {}

  getBmi(): number {
    return this.bmiCalculator.calculateBmi(this.user)
  }

  getBmiType(): string {
    const bmi = this.getBmi()
    return this.bmiCalculator.calculateBmiType(bmi)
  }

  getBmiPrime(): number {
    const bmi = this.getBmi()
    return this.bmiCalculator.calculateBmiPrime(bmi)
  }

  getIdealWeight(): [number, number] {
    return this.bmiCalculator.calculateIdealWeight(this.user)
  }

  getWaistToHipRatio(): number {
    return this.bodycompositionCalculator.calculateWaistToHipRatio(this.user)
  }

  getWaistToHeightRatio(): number {
    return this.bodycompositionCalculator.calculateWaistToHeightRatio(this.user)
  }

  getBodyFatPercantage(): number {
    return this.bodycompositionCalculator.calculateBodyFatPercantage(this.user)
  }

  getBmrHarrisBenedict(): number {
    return this.bmrCalculator.calculateBmrHarrisBenedict(this.user)
  }

  getBmrMifflinStJeor(): number {
    return this.bmrCalculator.calculateBmrMifflinStJeor(this.user)
  }
}

// import { InterfaceHealthCalculation } from '../interfaces/InterfaceHealthCalculation'
// import { User } from '../models/User'
// import { validateUserInput } from '../utils/validateUserObject'
// import { convertUserToMetric } from '../utils/unitConverter'
// import { copyUser } from '../utils/copyUser'
// import { BmiType, bmiRanges } from '../enums/constants'

// export class HealthCalculator implements InterfaceHealthCalculation {
//   private user: User

//   constructor(user: User) {
//     validateUserInput(user)
//     const userCopy = copyUser(user)
//     // TODO: reflektera över namnet nedan.
//     this.user = convertUserToMetric(userCopy) as User
//   }

//   calculateBmrMifflinStJeor(): number {

//   }

//   calculateTdee(): number {
//     if (this.user.age && this.user.activityLevel) {
//       const bmr = this.calculateBmrMifflinStJeor()
//       let activityFactor = 0
//       if (this.user.activityLevel === 'sedentary') {
//         activityFactor = 1.2
//       } else if (this.user.activityLevel === 'lightly') {
//         activityFactor = 1.375
//       } else if (this.user.activityLevel === 'moderately') {
//         activityFactor = 1.55
//       } else if (this.user.activityLevel === 'very') {
//         activityFactor = 1.725
//       } else if (this.user.activityLevel === 'extremely') {
//         activityFactor = 1.9
//       }
//       const tdee = bmr * activityFactor
//       return tdee
//     }
//     console.warn('Age and activity level is required for this method')
//     return NaN
//   }

// // TODO: senare versioner, lägg till Tdee med bmr benedtict
// // TODO: gå ingeom metoderna, fett procent är ganska stor, flytta över något till validate?
// // TODO: lägg in en gemensam hjälpfunktion heightToCentimeter?
// // TODO: Lägg in JSDoc, input och return
