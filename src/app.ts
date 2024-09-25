import { HealthCalculatorFactory } from './factories/HealthCalculatorFactory'
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

// export const beatriceUser: User = {
//   weight: 70,
//   height: 1.75,
//   age: 30,
//   gender: 'male',
//   unitSystem: 'metric',
//   activityLevel: 'moderately',
// }

// const healthCalc = new HealthCalculator(beatriceUser)
// const bmiPrime = healthCalc.calculateBmiPrime()
// const beaBmr = healthCalc.calculateBmrMifflinStJeor()
// console.log(beaBmr)

// const adamUser: User = {
//   weight: 70,
//   height: 1.75,
//   age: 30,
//   gender: 'male',
//   unitSystem: 'metric',
//   activityLevel: 'moderately',
//   waist: 85,
//   neck: 40,
//   hip: 95,
// }

// const beatriceUser: User = {
//   weight: 154,
//   height: 5.74,
//   age: 40,
//   gender: 'female',
//   unitSystem: 'imperial',
//   activityLevel: 'lightly',
//   waist: 32,
//   neck: 13.5,
//   hip: 40,
// }

// const ceasarUnderweightUser: User = {
//   weight: 50,
//   height: 1.75,
//   age: 60,
//   gender: 'male',
//   unitSystem: 'metric',
//   activityLevel: 'very',
// }

// const dianaOverweightUser: User = {
//   weight: 90,
//   height: 1.75,
//   age: 18,
//   gender: 'female',
//   unitSystem: 'metric',
//   activityLevel: 'extremely',
// }

// const bmiInvalidWeightValuesMetricUser: User = {
//   weight: -10,
//   height: 2,
//   unitSystem: 'metric',
// }

// const healthCalcAdam = new HealthCalculator(adamUser)
// console.log("Adam's BMI Prime:", healthCalcAdam.calculateBmiPrime())
// console.log("Adam's BMI:", healthCalcAdam.calculateBmi())
// console.log("Adam's BMI Type:", healthCalcAdam.calculateBmiType())
// console.log(
//   "Adam's BMR (Harris-Benedict):",
//   healthCalcAdam.calculateBmrHarrisBenedict()
// )
// console.log(
//   "Adam's BMR (Mifflin-St Jeor):",
//   healthCalcAdam.calculateBmrMifflinStJeor()
// )
// console.log("Adam's TDEE:", healthCalcAdam.calculateTdee())
// console.log("Adam's Ideal Weight:", healthCalcAdam.calculateIdealWeight())
// console.log(
//   "Adam's body fat percantege:",
//   healthCalcAdam.calculateBodyFatPercentage()
// )

// const healthCalcBeatrice = new HealthCalculator(beatriceUser)
// console.log("Beatrice's BMI Prime:", healthCalcBeatrice.calculateBmiPrime())
// console.log("Beatrice's BMI:", healthCalcBeatrice.calculateBmi())
// console.log("Beatrice's BMI Type:", healthCalcBeatrice.calculateBmiType())
// console.log(
//   "Beatrice's BMR (Harris-Benedict):",
//   healthCalcBeatrice.calculateBmrHarrisBenedict()
// )
// console.log(
//   "Beatrice's BMR (Mifflin-St Jeor):",
//   healthCalcBeatrice.calculateBmrMifflinStJeor()
// )
// console.log("Beatrice's TDEE:", healthCalcBeatrice.calculateTdee())
// console.log(
//   "Beatrice's Ideal Weight:",
//   healthCalcBeatrice.calculateIdealWeight()
// )
// console.log(
//   "Beatrice's body fat percantege:",
//   healthCalcBeatrice.calculateBodyFatPercentage()
// )

// const healthCalcCeasar = new HealthCalculator(ceasarUnderweightUser)
// console.log("Ceasar's BMI Prime:", healthCalcCeasar.calculateBmiPrime())
// console.log("Ceasar's BMI:", healthCalcCeasar.calculateBmi())
// console.log("Ceasar's BMI Type:", healthCalcCeasar.calculateBmiType())
// console.log(
//   "Ceasar's BMR (Harris-Benedict):",
//   healthCalcCeasar.calculateBmrHarrisBenedict()
// )
// console.log(
//   "Ceasar's BMR (Mifflin-St Jeor):",
//   healthCalcCeasar.calculateBmrMifflinStJeor()
// )
// console.log("Ceasar's TDEE:", healthCalcCeasar.calculateTdee())
// console.log("Ceasar's Ideal Weight:", healthCalcCeasar.calculateIdealWeight())

// const healthCalcDiana = new HealthCalculator(dianaOverweightUser)
// console.log("Diana's BMI Prime:", healthCalcDiana.calculateBmiPrime())
// console.log("Diana's BMI:", healthCalcDiana.calculateBmi())
// console.log("Diana's BMI Type:", healthCalcDiana.calculateBmiType())
// console.log(
//   "Diana's BMR (Harris-Benedict):",
//   healthCalcDiana.calculateBmrHarrisBenedict()
// )
// console.log(
//   "Diana's BMR (Mifflin-St Jeor):",
//   healthCalcDiana.calculateBmrMifflinStJeor()
// )
// console.log("Diana's TDEE:", healthCalcDiana.calculateTdee())
// console.log("Diana's Ideal Weight:", healthCalcDiana.calculateIdealWeight())
// //
// const healthCalcOutOfRange = new HealthCalculator(
//   bmiInvalidWeightValuesMetricUser
// )
// console.log('testing:', healthCalcOutOfRange)

// TODO: Handle measurements, e.g. imperial units

// TODO: Exception om heigh > 2.5 (=angett längd i cm istället för m)

// TODO: lägga till typescript som dependencies i package.json?

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

const normalWeightMaleMetric: User = {
  weight: 70,
  height: 1.75,
  age: 30,
  gender: 'male',
  waist: 80,
  hip: 95,
  neck: 37,
  unitSystem: 'metric',
  activityLevel: 'moderately',
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

// const calcOverweight = HealthCalculatorFactory.createHealthCalculator(
//   overweightFemaleMetric
// )

const healthCalc2 = HealthCalculatorFactory.createHealthCalculator(
  normalWeightMaleMetric
)

// console.log('Fat percentage:', calcOverweight.getBodyFatPercantage())

console.log(
  'BmiPrime',
  healthCalc.getBmi(),
  healthCalc.getBmiType(),
  healthCalc.getBodyFatPercantage()
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

// Använd din fabriksmetod för att jämföra
const calcOverweight = HealthCalculatorFactory.createHealthCalculator(
  overweightFemaleMetric
)
console.log(
  `Fabriksmetod beräknad kroppsfettsprocent: ${calcOverweight
    .getBodyFatPercantage()
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
  calcNormalWeight.getBodyFatPercantage().toFixed(2) + '%'
)
