import { HealthCalculatorFactory } from './factories/HealthCalculatorFactory'
import { User } from './models/User'

const user: User = {
  weight: 81, // kg
  height: 1.63, // meters
  age: 36,
  gender: 'female',
  waist: 92.5, // cm
  hip: 110, // cm
  neck: 36.5, // cm
  unitSystem: 'metric',
  activityLevel: 'moderately',
}

const healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)

console.log('BMI:', healthCalculator.getBmi())
console.log('BMI Type:', healthCalculator.getBmiType())
console.log('BMI Prime:', healthCalculator.getBmiPrime())
console.log('Ideal Weight Range:', healthCalculator.getIdealWeight())
console.log('Waist-to-Hip Ratio:', healthCalculator.getWaistToHipRatio())
console.log('Waist-to-Height Ratio:', healthCalculator.getWaistToHeightRatio())
console.log('Body Fat Percentage:', healthCalculator.getBodyFatPercentage())
console.log('BMR (Harris-Benedict):', healthCalculator.getBmrHarrisBenedict())
console.log('BMR (Mifflin-St Jeor):', healthCalculator.getBmrMifflinStJeor())
console.log('TDEE (Harris-Benedict):', healthCalculator.getTdeeHarrisBenedict())
console.log('TDEE (Mifflin-St Jeor):', healthCalculator.getTdeeMifflinStJeor())

//TODO: Ta bort denna
