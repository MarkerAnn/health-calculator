import { HealthCalculator } from './calculators/HealthCalculator'
import { User } from './models/User'

// const Arne: User = {
//   weight: 180,
//   height: 5.9,
//   unitSystem: 'imperial',
// }

// const Petter: User = {
//   weight: 10,
//   height: 2,
//   unitSystem: 'metric',
// }

// const calcPetter = new HealthCalculator(Petter)
// const petterBmi = calcPetter.calculateBmi()

// // console.log(petterBmi)

// const healthCalc = new HealthCalculator(Arne)
// const ArnesBMI = healthCalc.calculateBmi()
// const arnesBMIType = healthCalc.calculateBmiType()
// const arnesBmiPrime = healthCalc.calculateBmiPrime()

// console.log(ArnesBMI, arnesBMIType, petterBmi, arnesBmiPrime)

export const beatriceUser: User = {
  weight: 70,
  height: 1.75,
  age: 30,
  gender: 'male',
  unitSystem: 'metric',
  activityLevel: 'moderately',
}

const healthCalc = new HealthCalculator(beatriceUser)
const bmiPrime = healthCalc.calculateBmiPrime()
const beaBmr = healthCalc.calculateBmrMifflinStJeor()
console.log(beaBmr)

// TODO: Handle measurements, e.g. imperial units

// TODO: Exception om heigh > 2.5 (=angett längd i cm istället för m)

// TODO: lägga till typescript som dependencies i package.json?
