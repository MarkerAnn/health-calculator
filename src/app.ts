import { HealthCalculator } from './calculators/HealthCalculator'
import { User } from './models/User'

// const weight = 80
// const height = 1.8
// const bmi = calculateBmi(weight, height)
// console.log(`BMI: ${bmi}`)

const user: User = {
  weight: 80,
  height: 1.8,
  unitSystem: 'metric',
}

console.log(user.gender)

// TODO: Handle measurements, e.g. imperial units
// TODO: Send an useribject instead of weight and height
// TODO: Get the number of BMI
// TODO: Exception om heigh > 2.5 (=angett längd i cm istället för m)
