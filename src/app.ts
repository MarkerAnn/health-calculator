import { HealthCalculatorFactory } from './factories/HealthCalculatorFactory'
import { User } from './models/User'

const underweightMaleImperial: User = {
  weight: 121, // lbs
  height: 5.9, // feet
  age: 25,
  gender: 'male',
  waist: 29.5, // inches
  hip: 35.4, // inches
  neck: 13.8, // inches
  unitSystem: 'imperial',
  activityLevel: 'very',
}

const overweightFemaleMetric: User = {
  weight: 75,
  height: 1.65,
  age: 35,
  gender: 'female',
  waist: 85,
  hip: 100,
  neck: 34,
  unitSystem: 'metric',
  activityLevel: 'sedentary',
}

const healthCalc = HealthCalculatorFactory.createHealthCalculator(
  underweightMaleImperial
)

console.log(
  'BmiPrime',
  healthCalc.getBmi(),
  healthCalc.getBmiType(),
  healthCalc.getBodyFatPercentage()
)

const heightInCm = 165
const waistHipNeckSum = 85 + 100 - 34

const heightFactor = 97.684 * Math.log10(heightInCm)
const waistHipNeckFactor = 163.205 * Math.log10(waistHipNeckSum)
const constantFactor = 78.387

const bodyFatPercentage = waistHipNeckFactor - heightFactor - constantFactor

console.log(
  `Manuellt beräknad kroppsfettsprocent: ${bodyFatPercentage.toFixed(2)}%`
)

const calcOverweight = HealthCalculatorFactory.createHealthCalculator(
  overweightFemaleMetric
)
console.log(
  `Fabriksmetod beräknad kroppsfettsprocent: ${calcOverweight
    .getBodyFatPercentage()
    .toFixed(2)}%`
)

const normalWeightFemaleMetric: User = {
  weight: 60,
  height: 1.65,
  age: 30,
  gender: 'female',
  waist: 70,
  hip: 90,
  neck: 32,
  unitSystem: 'metric',
  activityLevel: 'sedentary',
}

const calcNormalWeight = HealthCalculatorFactory.createHealthCalculator(
  normalWeightFemaleMetric
)

console.log(
  'Fat percentage for normal weight female:',
  calcNormalWeight.getBodyFatPercentage().toFixed(2) + '%'
)

//TODO: Ta bort denna
