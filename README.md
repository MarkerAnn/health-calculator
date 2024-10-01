# Body Measurements Module

## Overview

This module provides a comprehensive set of tools for calculating various body measurements and health-related metrics. It's designed to be easy to use and integrate into your health and fitness applications.

## Features

- BMI (Body Mass Index) calculation
- Body fat percentage estimation
- Waist-to-hip ratio calculation
- Waist-to-height ratio calculation
- BMR (Basal Metabolic Rate) calculation using Harris-Benedict and Mifflin-St Jeor equations
- TDEE (Total Daily Energy Expenditure) calculation
- Lean body mass calculation
- Support for both metric and imperial units
- Calorie and weight goal calculations
- Estimated weight change calculations

## Installation

To install the Body Measurements module, use npm:

```bash
npm install body-measurements
```

## Usage

Here's a quick example of how to use the module:

```javascript
import { HealthCalculatorFactory } from 'body-measurements'

const user = {
  weight: 70, // kg
  height: 1.75, // meters
  age: 30,
  gender: 'male',
  waist: 80, // cm
  hip: 95, // cm
  neck: 37, // cm
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
console.log('Lean Body Mass:', healthCalculator.getLeanBodyMass())
console.log('BMR (Harris-Benedict):', healthCalculator.getBmrHarrisBenedict())
console.log('BMR (Mifflin-St Jeor):', healthCalculator.getBmrMifflinStJeor())
console.log('TDEE (Harris-Benedict):', healthCalculator.getTdeeHarrisBenedict())
console.log('TDEE (Mifflin-St Jeor):', healthCalculator.getTdeeMifflinStJeor())
console.log(
  'Caloric Surplus/Deficit:',
  healthCalculator.getCaloricSurplusOrDeficit()
)
console.log(
  'Estimated Weekly Weight Change:',
  healthCalculator.getEstimatedWeightChangeWeekly()
)
console.log(
  'Estimated Monthly Weight Change:',
  healthCalculator.getEstimatedWeightChangeMonthly()
)
console.log(
  'Estimated Time to Weight Goal:',
  healthCalculator.getEstimateTimeToWeightGoal()
)
console.log(
  'Calories for Weight Goal:',
  healthCalculator.getCaloriesForWeightGoal()
)
```

You can find more examples of usage on the projects [GitHub page](https://github.com/MarkerAnn/health-calculator/blob/main/examples/exampleWithImperialAndMetric.js)

## API Documentation

### User Object

The `User` object is used to provide input data for calculations. It has the following properties:

- `weight`: number (kg for metric, lbs for imperial) <span style="color: red;">Required</span>
- `height`: number (meters for metric, feet for imperial) <span style="color: red;">Required</span>
- `age`: number (optional)
- `gender`: 'male' | 'female' (optional)
- `waist`: number (cm for metric, inches for imperial, optional)
- `hip`: number (cm for metric, inches for imperial, optional)
- `neck`: number (cm for metric, inches for imperial, optional)
- `unitSystem`: 'metric' | 'imperial' <span style="color: red;">Required</span>
- `activityLevel`: 'sedentary' | 'lightly' | 'moderately' | 'very' | 'extremely' (optional)
- `dailyCalories`: number (optional)
- `weightGoal`: number (kg for metric, lbs for imperial, optional)
- `weeksToWeightGoal`: number (optional)

### HealthCalculator Methods

- `getBmi()`: Calculates Body Mass Index (BMI), a measure of body fat based on weight and height. Returns the BMI value, which helps assess whether an individual is underweight, normal weight, overweight, or obese.
- `getBmiType()`: Returns a string with the BMI category based on the calculated BMI value. The possible categories include: 'underweight, severe thinness', 'underweight, moderate thinness', 'underweight, mild thinness', 'normal weight', 'overweight, pre-obese', 'obese, class I', 'obese, class II', or 'obese, class III'. These categories provide a detailed classification of an individual's body weight relative to their height.
- `getBmiPrime()`: Calculates and returns BMI Prime, which is a ratio of the calculated BMI to the upper limit of the normal BMI range (25). This value indicates how close or far an individual is from the normal weight range.
- `getIdealWeight()`: Returns the ideal weight range in kilograms as an array [min, max] when the BMI type is 'normal weight'. This range is calculated based on height and represents a healthy weight range for the individual according to the BMI classification.
- `getWaistToHipRatio()`: Calculates the Waist-to-Hip Ratio (WHR), which is used to assess the distribution of body fat and the associated risk of health conditions.
- `getWaistToHeightRatio()`: Calculates the Waist-to-Height Ratio (WHtR), a metric used to measure an individual's risk of obesity-related health issues.
- `getBodyFatPercentage()`: Estimates body fat percentage based on various measurements such as waist, hip, neck circumference, and weight. This value provides an indication of how much of an individual's total body mass is composed of fat.
- `getLeanBodyMass()`: Calculates lean body mass, using the Boer equation. This represents the weight of everything other than fat (muscles, bones, organs, etc.) and is returned in kilograms.
- `getBmrHarrisBenedict()`: Calculates Basal Metabolic Rate (BMR) using the Harris-Benedict equation. Returns the estimated daily calorie requirement to maintain basic bodily functions at rest, such as breathing and circulation.
- `getBmrMifflinStJeor()`: Calculates Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation. Returns the estimated daily calorie requirement to maintain basic bodily functions at rest.
- `getTdeeHarrisBenedict()`: Calculates Total Daily Energy Expenditure (TDEE) using the Harris-Benedict equation, which takes into account BMR and activity level to estimate the total number of calories needed to maintain the current weight.
- `getTdeeMifflinStJeor()`: Calculates Total Daily Energy Expenditure (TDEE) using the Mifflin-St Jeor equation. This calculation estimates the total daily calorie needs based on BMR and physical activity level.
- `getCaloricSurplusOrDeficit()`: Calculates the daily caloric surplus (if consuming more than needed) or deficit (if consuming less than needed), based on current calorie intake and TDEE. Returns a positive value for surplus or a negative value for deficit.
- `getEstimatedWeightChangeWeekly()`: Calculates the estimated weekly weight change based on daily caloric surplus or deficit. This value provides an approximation of how much weight the individual will gain or lose each week.
- `getEstimatedWeightChangeMonthly()`: Calculates the estimated weekly weight change based on daily caloric surplus or deficit. This value provides an approximation of how much weight the individual will gain or lose each month.
- `getEstimateTimeToWeightGoal()`: Calculates the estimated time (in weeks) to reach the weight goal, based on current weight, caloric intake, and desired weight change. This method provides a timeline for reaching a specific weight target. It returns a number in weeks.
- `getCaloriesForWeightGoal()`: Calculates and returns the calories needed to reach the weight goal.

| Method                            | weight | height | age | gender | waist | hip | neck | unitSystem | activityLevel | dailyCalories | weightGoal | weeksToWeightGoal |
| --------------------------------- | ------ | ------ | --- | ------ | ----- | --- | ---- | ---------- | ------------- | ------------- | ---------- | ----------------- |
| getBmi()                          | X      | X      |     |        |       |     |      | X          |               |               |            |                   |
| getBmiType()                      | X      | X      |     |        |       |     |      | X          |               |               |            |                   |
| getBmiPrime()                     | X      | X      |     |        |       |     |      | X          |               |               |            |                   |
| getIdealWeight()                  |        | X      |     |        |       |     |      | X          |               |               |            |                   |
| getWaistToHipRatio()              |        |        |     |        | X     | X   |      | X          |               |               |            |                   |
| getWaistToHeightRatio()           |        | X      |     |        | X     |     |      | X          |               |               |            |                   |
| getBodyFatPercentage()            |        | X      |     | X      | X     | X\* | X    | X          |               |               |            |                   |
| getLeanBodyMass()                 | X      |        |     | X      |       |     |      | X          |               |               |            |                   |
| getBmrHarrisBenedict()            | X      | X      | X   | X      |       |     |      | X          |               |               |            |                   |
| getBmrMifflinStJeor()             | X      | X      | X   | X      |       |     |      | X          |               |               |            |                   |
| getTdeeHarrisBenedict()           | X      | X      | X   | X      |       |     |      | X          | X             |               |            |                   |
| getTdeeMifflinStJeor()            | X      | X      | X   | X      |       |     |      | X          | X             |               |            |                   |
| getCaloricSurplusOrDeficit()      | X      | X      | X   | X      |       |     |      | X          | X             | X             |            |                   |
| getEstimatedWeightChangeWeekly()  | X      | X      | X   | X      |       |     |      | X          | X             | X             |            |                   |
| getEstimatedWeightChangeMonthly() | X      | X      | X   | X      |       |     |      | X          | X             | X             |            |                   |
| getEstimateTimeToWeightGoal()     | X      | X      | X   | X      |       |     |      | X          | X             | X             | X          |                   |
| getCaloriesForWeightGoal()        | X      | X      | X   | X      |       |     |      | X          | X             |               | X          | X                 |

`*`Hip measurement is required for females only when calculating body fat percentage.

## Limitations

While this module provides valuable health and fitness calculations, it's important to be aware of its limitations:

1. BMI Limitations:

   - Does not account for age or gender
   - Does not differentiate between muscle mass and fat mass
   - May not be accurate for athletes, elderly, or individuals with high muscle mass

2. Body Fat Percentage Estimation:

   - Uses the U.S. Navy method, which is an estimation and may not be as accurate as direct measurement methods
   - Accuracy may vary depending on individual body composition

3. BMR and TDEE Calculations:

   - Based on equations that use averages and may not account for individual variations in metabolism
   - Activity level categories are broad and may not precisely match an individual's actual activity level

4. General Limitations:
   - All calculations are estimates and should not be used as a substitute for professional medical advice
   - The module does not account for factors such as genetics, medical conditions, or medications that may affect body composition or metabolism
   - Results may be less accurate for individuals at extreme ends of the height or weight spectrum

Always consult with healthcare professionals for personalized health and fitness advice.

## Dependencies

This module is designed to have minimal dependencies to ensure easy integration and maintenance. For users of the compiled module, there are no external dependencies required.

## Contributing

I welcome contributions to improve the Body Measurements module. Please see our [CONTRIBUTING.md](CONTRIBUTING/CONTRIBUTING.md) file for details on how to contribute.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub repository](https://github.com/MarkerAnn/health-calculator/issues).
