import { HealthCalculatorFactory } from '../src/factories/HealthCalculatorFactory'
import { User } from '../src/models/User'

// Create a User object in metric units
const metricUser: User = {
  weight: 70, // kg
  height: 1.75, // meter
  age: 30,
  gender: 'male',
  waist: 80, // cm
  hip: 90, // cm
  neck: 40, // cm
  unitSystem: 'metric', // Metric system
  activityLevel: 'moderately',
}

// Create a User object in imperial units
const imperialUser: User = {
  weight: 154, // lbs
  height: 5.75, // feet
  age: 30,
  gender: 'male',
  waist: 32, // inches
  hip: 36, // inches
  neck: 16, // inches
  unitSystem: 'imperial', // Imperial system
  activityLevel: 'lightly',
}

// Create HealthCalculator instance for the metric user
// The validation and any necessary unit conversion (if needed) will be handled automatically
const metricHealthCalculator =
  HealthCalculatorFactory.createHealthCalculator(metricUser)

// Calculate various health metrics for the metric user
console.log('Metric User - BMI:', metricHealthCalculator.getBmi())
console.log(
  'Metric User - TDEE (Mifflin-St Jeor):',
  metricHealthCalculator.getTdeeMifflinStJeor()
)
console.log(
  'Metric User - Waist-to-Hip Ratio:',
  metricHealthCalculator.getWaistToHipRatio()
)
console.log(
  'Metric User - Body Fat Percentage:',
  metricHealthCalculator.getBodyFatPercentage()
)

// Create HealthCalculator instance for the imperial user
// The user’s data will automatically be converted to metric units inside the factory
const imperialHealthCalculator =
  HealthCalculatorFactory.createHealthCalculator(imperialUser)

// Calculate various health metrics for the imperial user
console.log('Imperial User - BMI:', imperialHealthCalculator.getBmi())
console.log(
  'Imperial User - TDEE (Mifflin-St Jeor):',
  imperialHealthCalculator.getTdeeMifflinStJeor()
)
console.log(
  'Imperial User - Waist-to-Hip Ratio:',
  imperialHealthCalculator.getWaistToHipRatio()
)
console.log(
  'Imperial User - Body Fat Percentage:',
  imperialHealthCalculator.getBodyFatPercentage()
)
