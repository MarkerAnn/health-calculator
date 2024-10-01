import { HealthCalculatorFactory } from './factories/HealthCalculatorFactory.js'
import { User } from './models/User.js'

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
  dailyCalories: 1300, // Required for caloric surplus/deficit calculations
  weightGoal: 65, // kg, Required for weight goal methods
  weeksToWeightGoal: 12, // Required for weight goal methods
}

const imperialCalculator = HealthCalculatorFactory.createHealthCalculator(user)

console.log('Imperial - BMI:', imperialCalculator.getBmi()) // Output: Imperial BMI
console.log('Imperial - BMI Type:', imperialCalculator.getBmiType()) // Output: Imperial BMI Type
console.log('Imperial - BMI Prime:', imperialCalculator.getBmiPrime()) // Output: Imperial BMI Prime
console.log(
  'Imperial - Ideal Weight Range:',
  imperialCalculator.getIdealWeight()
) // Output: Imperial Ideal Weight Range
console.log(
  'Imperial - Waist-to-Hip Ratio:',
  imperialCalculator.getWaistToHipRatio()
) // Output: Imperial Waist-to-Hip Ratio
console.log(
  'Imperial - Waist-to-Height Ratio:',
  imperialCalculator.getWaistToHeightRatio()
) // Output: Imperial Waist-to-Height Ratio
console.log(
  'Imperial - Body Fat Percentage:',
  imperialCalculator.getBodyFatPercentage()
) // Output: Imperial Body Fat Percentage
console.log('Imperial - Lean Body Mass:', imperialCalculator.getLeanBodyMass()) // Output: Imperial Lean Body Mass
console.log(
  'Imperial - BMR (Harris-Benedict):',
  imperialCalculator.getBmrHarrisBenedict()
) // Output: Imperial BMR (Harris-Benedict)
console.log(
  'Imperial - BMR (Mifflin-St Jeor):',
  imperialCalculator.getBmrMifflinStJeor()
) // Output: Imperial BMR (Mifflin-St Jeor)
console.log(
  'Imperial - TDEE (Harris-Benedict):',
  imperialCalculator.getTdeeHarrisBenedict()
) // Output: Imperial TDEE (Harris-Benedict)
console.log(
  'Imperial - TDEE (Mifflin-St Jeor):',
  imperialCalculator.getTdeeMifflinStJeor()
) // Output: Imperial TDEE (Mifflin-St Jeor)

console.log(
  'Imperial - Caloric Surplus/Deficit:',
  imperialCalculator.getCaloricSurplusOrDeficit()
) // Output: Imperial Caloric Surplus/Deficit
console.log(
  'Imperial - Estimated Weekly Weight Change:',
  imperialCalculator.getEstimatedWeightChangeWeekly()
) // Output: Imperial Estimated Weekly Weight Change
console.log(
  'Imperial - Estimated Monthly Weight Change:',
  imperialCalculator.getEstimatedWeightChangeMonthly()
) // Output: Imperial Estimated Monthly Weight Change
console.log(
  'Imperial - Estimated Time to Weight Goal:',
  imperialCalculator.getEstimateTimeToWeightGoal()
) // Output: Imperial Estimated Time to Weight Goal
console.log(
  'Imperial - Calories for Weight Goal:',
  imperialCalculator.getCaloriesForWeightGoal()
) // Output: Imperial Calories for Weight Goal

//TODO: Ta bort denna

// import { HealthCalculator } from '../calculators/HealthCalculator.js';
// import { BmiCalculator } from '../calculators/BmiCalculator.js';
// import { BodyCompositionCalculator } from '../calculators/BodyCompositionCalculator.js';
// import { BmrCalculator } from '../calculators/BmrCalculator.js';
// import { TdeeCalculator } from '../calculators/TdeeCalculator.js';
// import { validateUserInput } from '../utils/validateUserInput.js';
// import { copyUser } from '../utils/copyUser.js';
// import { convertUserToMetric } from '../utils/unitConverter.js';
// import { CalorieCalculator } from '../calculators/CalorieCalculator..js';
