import { HealthCalculator } from './calculators/HealthCalculator'
import { User } from './models/User'

const Arne: User = {
  weight: 180,
  height: 5.9,
  unitSystem: 'imperial',
}

const Petter: User = {
  weight: 10,
  height: 2,
  unitSystem: 'metric',
}

const calcPetter = new HealthCalculator(Petter)
const petterBmi = calcPetter.calculateBmi()

// console.log(petterBmi)

const healthCalc = new HealthCalculator(Arne)
const ArnesBMI = healthCalc.calculateBmi()
const arnesBMIType = healthCalc.calculateBmiType()
const arnesBmiPrime = healthCalc.calculateBmiPrime()

console.log(ArnesBMI, arnesBMIType, petterBmi, arnesBmiPrime)

// TODO: Handle measurements, e.g. imperial units

// TODO: Exception om heigh > 2.5 (=angett längd i cm istället för m)

// TODO: lägga till typescript som dependencies i package.json?
