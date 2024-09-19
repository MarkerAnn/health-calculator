import { calculateBmi } from './calculators/Bmi'
import { User } from './models/User'

// const weight = 80
// const height = 1.8
// const bmi = calculateBmi(weight, height)
// console.log(`BMI: ${bmi}`)

const user: User = {
  weight: 80,
  height: 1.8,
  gender: 'female',
  unitSystem: 'metric',
}

// TODO: Handle measurements, e.g. imperial units
// TODO: Send an useribject instead of weight and height
// TODO: Get the number of BMI
// TODO: Exception om heigh > 2.5 (=angett längd i cm istället för m)
