import { HealthCalculatorFactory } from 'body-measurements'

const metricUser = {
  weight: 70,
  height: 1.75,
  unitSystem: 'metric',
  gender: 'male',
  age: 30,
  waist: 80,
  hip: 95,
  neck: 37,
  activityLevel: 'moderately',
}

const imperialUser = {
  weight: 154,
  height: 5.9,
  unitSystem: 'imperial',
  gender: 'female',
  age: 25,
  waist: 31.5,
  hip: 37.4,
  neck: 14.5,
  activityLevel: 'lightly',
}

try {
  console.log('Testing metric calculations...')
  const metricCalculator =
    HealthCalculatorFactory.createHealthCalculator(metricUser)
  console.log('BMI:', metricCalculator.getBmi())
  console.log('BMR:', metricCalculator.getBmrHarrisBenedict())
  console.log('Body Fat %:', metricCalculator.getBodyFatPercentage())
  console.log('TDEE:', metricCalculator.getTdeeHarrisBenedict())

  console.log('\nTesting imperial calculations...')
  const imperialCalculator =
    HealthCalculatorFactory.createHealthCalculator(imperialUser)
  console.log('BMI:', imperialCalculator.getBmi())
  console.log('BMR:', imperialCalculator.getBmrHarrisBenedict())
  console.log('Body Fat %:', imperialCalculator.getBodyFatPercentage())
  console.log('TDEE:', imperialCalculator.getTdeeHarrisBenedict())

  console.log('\n✅ All tests passed!')
  process.exit(0)
} catch (error) {
  console.error('❌ Test failed:', error)
  console.error('Error details:', error.message)
  process.exit(1)
}
