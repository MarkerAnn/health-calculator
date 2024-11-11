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

console.log('Metric - BMI:', metricCalculator.getBmi()) // Output: 22.857142857142858
console.log('Metric - BMI Type:', metricCalculator.getBmiType()) // Output: normal weight
console.log('Metric - BMI Prime:', metricCalculator.getBmiPrime()) // Output: 0.9142857142857143
console.log('Metric - Ideal Weight Range:', metricCalculator.getIdealWeight()) // Output: [ 56.65625, 76.25625 ]
console.log(
  'Metric - Waist-to-Hip Ratio:',
  metricCalculator.getWaistToHipRatio()
) // Output: 0.8421052631578947
console.log(
  'Metric - Waist-to-Height Ratio:',
  metricCalculator.getWaistToHeightRatio()
) // Output: 0.45714285714285713
console.log(
  'Metric - Body Fat Percentage:',
  metricCalculator.getBodyFatPercentage()
) // Output: 20.149993896363505
console.log('Metric - Lean Body Mass:', metricCalculator.getLeanBodyMass()) // Output: 56.015
console.log(
  'Metric - BMR (Harris-Benedict):',
  metricCalculator.getBmrHarrisBenedict()
) // Output: 1695.6670000000001
console.log(
  'Metric - BMR (Mifflin-St Jeor):',
  metricCalculator.getBmrMifflinStJeor()
) // Output: 1648.75
console.log(
  'Metric - TDEE (Harris-Benedict):',
  metricCalculator.getTdeeHarrisBenedict()
) // Output: 2628.2838500000003
console.log(
  'Metric - TDEE (Mifflin-St Jeor):',
  metricCalculator.getTdeeMifflinStJeor()
) // Output: 2555.5625

console.log(
  'Metric - Caloric Surplus/Deficit:',
  metricCalculator.getCaloricSurplusOrDeficit()
) // Output: 128.28385000000026
console.log(
  'Metric - Estimated Weekly Weight Change:',
  metricCalculator.getEstimatedWeightChangeWeekly()
) // Output: 0.11662168181818205
console.log(
  'Metric - Estimated Monthly Weight Change:',
  metricCalculator.getEstimatedWeightChangeMonthly()
) // Output: 0.4998072077922088
console.log(
  'Metric - Estimated Time to Weight Goal:',
  metricCalculator.getEstimateTimeToWeightGoal()
) // Output: 43
console.log(
  'Metric - Calories for Weight Goal:',
  metricCalculator.getCaloriesForWeightGoal()
) // Output: 2078

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

console.log('Imperial - BMI:', imperialCalculator.getBmi()) // Output: 21.599920789295435
console.log('Imperial - BMI Type:', imperialCalculator.getBmiType()) // Output: normal weight
console.log('Imperial - BMI Prime:', imperialCalculator.getBmiPrime()) // Output: 0.8639968315718174
console.log(
  'Imperial - Ideal Weight Range:',
  imperialCalculator.getIdealWeight()
) // Output: [ 59.828164214400005, 80.52547507776 ]
console.log(
  'Imperial - Waist-to-Hip Ratio:',
  imperialCalculator.getWaistToHipRatio()
) // Output: 0.842245989304813
console.log(
  'Imperial - Waist-to-Height Ratio:',
  imperialCalculator.getWaistToHeightRatio()
) // Output: 0.4449152542372881
console.log(
  'Imperial - Body Fat Percentage:',
  imperialCalculator.getBodyFatPercentage()
) // Output: 19.47752194660007
console.log('Imperial - Lean Body Mass:', imperialCalculator.getLeanBodyMass()) // Output: 57.24538337599999
console.log(
  'Imperial - BMR (Harris-Benedict):',
  imperialCalculator.getBmrHarrisBenedict()
) // Output: 1716.888659696
console.log(
  'Imperial - BMR (Mifflin-St Jeor):',
  imperialCalculator.getBmrMifflinStJeor()
) // Output: 1677.4816799999999
console.log(
  'Imperial - TDEE (Harris-Benedict):',
  imperialCalculator.getTdeeHarrisBenedict()
) // Output: 2661.1774225288004
console.log(
  'Imperial - TDEE (Mifflin-St Jeor):',
  imperialCalculator.getTdeeMifflinStJeor()
) // Output: 2600.096604

console.log(
  'Imperial - Caloric Surplus/Deficit:',
  imperialCalculator.getCaloricSurplusOrDeficit()
) // Output: 161.17742252880043
console.log(
  'Imperial - Estimated Weekly Weight Change:',
  imperialCalculator.getEstimatedWeightChangeWeekly()
) // Output: 0.14683292631788114
console.log(
  'Imperial - Estimated Monthly Weight Change:',
  imperialCalculator.getEstimatedWeightChangeMonthly()
) // Output: 0.6292839699337763
console.log(
  'Imperial - Estimated Time to Weight Goal:',
  imperialCalculator.getEstimateTimeToWeightGoal()
) // Output: 34
console.log(
  'Imperial - Calories for Weight Goal:',
  imperialCalculator.getCaloriesForWeightGoal()
) // Output: 2112

const user = {
  weight: 83, // kg
  height: 1.63, // meters
  age: 30,
  gender: 'female',
  waist: 100, // cm
  hip: 120, // cm
  neck: 37, // cm
  unitSystem: 'metric',
  activityLevel: 'moderately',
  dailyCalories: 2500,
  weightGoal: 65, // kg
  weeksToWeightGoal: 15,
}

const healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)
console.log('BMI:', healthCalculator.getBmi())
console.log('BMI Type:', healthCalculator.getBmiType())
console.log('Body Fat Percentage:', healthCalculator.getBodyFatPercentage())
console.log('Lean Body Mass:', healthCalculator.getLeanBodyMass())
console.log('Waist-to-Hip Ratio:', healthCalculator.getWaistToHipRatio())
console.log('Waist-to-Height Ratio:', healthCalculator.getWaistToHeightRatio())
