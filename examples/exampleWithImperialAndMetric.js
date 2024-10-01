import { HealthCalculatorFactory } from '../dist/factories/HealthCalculatorFactory.js'

// Create a User object in metric units
const metricUser = {
  weight: 70, // kg
  height: 1.75, // meters
  age: 30,
  gender: 'male',
  waist: 80, // cm
  hip: 95, // cm
  neck: 37, // cm
  unitSystem: 'metric',
  activityLevel: 'moderately',
  dailyCalories: 2500, // Required for caloric surplus/deficit calculations
  weightGoal: 65, // kg, Required for weight goal methods
  weeksToWeightGoal: 10, // Required for weight goal methods
}

const metricCalculator =
  HealthCalculatorFactory.createHealthCalculator(metricUser)

console.log('Metric - BMI:', metricCalculator.getBmi()) // Output: Metric BMI
console.log('Metric - BMI Type:', metricCalculator.getBmiType()) // Output: Metric BMI Type
console.log('Metric - BMI Prime:', metricCalculator.getBmiPrime()) // Output: Metric BMI Prime
console.log('Metric - Ideal Weight Range:', metricCalculator.getIdealWeight()) // Output: Metric Ideal Weight Range
console.log(
  'Metric - Waist-to-Hip Ratio:',
  metricCalculator.getWaistToHipRatio()
) // Output: Metric Waist-to-Hip Ratio
console.log(
  'Metric - Waist-to-Height Ratio:',
  metricCalculator.getWaistToHeightRatio()
) // Output: Metric Waist-to-Height Ratio
console.log(
  'Metric - Body Fat Percentage:',
  metricCalculator.getBodyFatPercentage()
) // Output: Metric Body Fat Percentage
console.log('Metric - Lean Body Mass:', metricCalculator.getLeanBodyMass()) // Output: Metric Lean Body Mass
console.log(
  'Metric - BMR (Harris-Benedict):',
  metricCalculator.getBmrHarrisBenedict()
) // Output: Metric BMR (Harris-Benedict)
console.log(
  'Metric - BMR (Mifflin-St Jeor):',
  metricCalculator.getBmrMifflinStJeor()
) // Output: Metric BMR (Mifflin-St Jeor)
console.log(
  'Metric - TDEE (Harris-Benedict):',
  metricCalculator.getTdeeHarrisBenedict()
) // Output: Metric TDEE (Harris-Benedict)
console.log(
  'Metric - TDEE (Mifflin-St Jeor):',
  metricCalculator.getTdeeMifflinStJeor()
) // Output: Metric TDEE (Mifflin-St Jeor)

console.log(
  'Metric - Caloric Surplus/Deficit:',
  metricCalculator.getCaloricSurplusOrDeficit()
) // Output: Metric Caloric Surplus/Deficit
console.log(
  'Metric - Estimated Weekly Weight Change:',
  metricCalculator.getEstimatedWeightChangeWeekly()
) // Output: Metric Estimated Weekly Weight Change
console.log(
  'Metric - Estimated Monthly Weight Change:',
  metricCalculator.getEstimatedWeightChangeMonthly()
) // Output: Metric Estimated Monthly Weight Change
console.log(
  'Metric - Estimated Time to Weight Goal:',
  metricCalculator.getEstimateTimeToWeightGoal()
) // Output: Metric Estimated Time to Weight Goal
console.log(
  'Metric - Calories for Weight Goal:',
  metricCalculator.getCaloriesForWeightGoal()
) // Output: Metric Calories for Weight Goal

// Create a User object in imperial units
const imperialUser = {
  weight: 154, // lbs
  height: 5.9, // feet
  age: 30,
  gender: 'male',
  waist: 31.5, // inches
  hip: 37.4, // inches
  neck: 14.5, // inches
  unitSystem: 'imperial',
  activityLevel: 'moderately',
  dailyCalories: 2500, // Required for caloric surplus/deficit calculations
  weightGoal: 143, // lbs, Required for weight goal methods
  weeksToWeightGoal: 10, // Required for weight goal methods
}
const imperialCalculator =
  HealthCalculatorFactory.createHealthCalculator(imperialUser)

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
