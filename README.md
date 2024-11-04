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

To use this module, make sure you have `"type": "module"` in your `package.json`. This is necessary because the module uses ES6 modules.

#### Example of `package.json`:

```
{
  "name": "your-project",
  "version": "1.0.0",
  "type": "module",  // Add this line
  "scripts": {
    "start": "node index.js"
  }
}
```

To install the Body Measurements module, use npm:

```bash
npm install body-measurements
```

## Usage

Here's a basic example of how to use the module:

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
  dailyCalories: 2500,
  weightGoal: 65, // kg
  weeksToWeightGoal: 15,
}

const healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)

// Basic measurements
console.log('BMI:', healthCalculator.getBmi())
console.log('BMI Type:', healthCalculator.getBmiType())
console.log('Body Fat Percentage:', healthCalculator.getBodyFatPercentage())

// Energy calculations
console.log('BMR (Harris-Benedict):', healthCalculator.getBmrHarrisBenedict())
console.log('TDEE (Harris-Benedict):', healthCalculator.getTdeeHarrisBenedict())

// Weight management
console.log(
  'Caloric Surplus/Deficit:',
  healthCalculator.getCaloricSurplusOrDeficit()
)
console.log(
  'Estimated Weekly Weight Change:',
  healthCalculator.getEstimatedWeightChangeWeekly()
)
console.log(
  'Estimated Time to Weight Goal:',
  healthCalculator.getEstimateTimeToWeightGoal()
)
```

This example demonstrates the basic usage of the module. For more detailed examples, including how to use imperial units and other advanced features, please refer to our [GitHub examples page](https://github.com/MarkerAnn/health-calculator/blob/main/examples/exampleWithImperialAndMetric.js).

### Using Imperial Units

To use imperial units, simply change the `unitSystem` and provide measurements in the appropriate units:

```javascript
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
  dailyCalories: 2500,
  weightGoal: 143, // lbs
  weeksToWeightGoal: 10,
}

const healthCalculator =
  HealthCalculatorFactory.createHealthCalculator(imperialUser)
// Use the same methods as with metric units
```

For a complete list of available methods and their descriptions, please refer to the API Documentation section below.

You can find more examples of usage on the projects [GitHub page](https://github.com/MarkerAnn/health-calculator/blob/main/examples/exampleWithImperialAndMetric.js)

## API Documentation

### User Object

The `User` object provides input data for calculations. It has the following properties:

| Property          | Type   | Description                                                  | Required |
| ----------------- | ------ | ------------------------------------------------------------ | -------- |
| weight            | number | Weight in kg (metric) or lbs (imperial)                      | No       |
| height            | number | Height in meters (metric) or feet (imperial)                 | No       |
| age               | number | Age in years                                                 | No       |
| gender            | string | 'male' or 'female'                                           | No       |
| waist             | number | Waist circumference in cm (metric) or inches (imperial)      | No       |
| hip               | number | Hip circumference in cm (metric) or inches (imperial)        | No       |
| neck              | number | Neck circumference in cm (metric) or inches (imperial)       | No       |
| unitSystem        | string | 'metric' or 'imperial'                                       | Yes      |
| activityLevel     | string | 'sedentary', 'lightly', 'moderately', 'very', or 'extremely' | No       |
| dailyCalories     | number | Daily calorie intake                                         | No       |
| weightGoal        | number | Target weight in kg (metric) or lbs (imperial)               | No       |
| weeksToWeightGoal | number | Number of weeks to achieve weight goal                       | No       |

### HealthCalculator Methods

#### BMI methods

```javascript
const user = { weight: 70, height: 1.75, unitSystem: 'metric' }
const healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)
```

- `getBmi()`: Calculates Body Mass Index (BMI), a measure of body fat based on weight and height. Returns the BMI value, which helps assess whether an individual is underweight, normal weight, overweight, or obese.

```javascript
console.log(healthCalculator.getBmi())
// Output: 22.857142857142858
```

- `getBmiType()`: Returns a string with the BMI category based on the calculated BMI value. The possible categories include: 'underweight, severe thinness', 'underweight, moderate thinness', 'underweight, mild thinness', 'normal weight', 'overweight, pre-obese', 'obese, class I', 'obese, class II', or 'obese, class III'. These categories provide a detailed classification of an individual's body weight relative to their height.

```javascript
console.log(healthCalculator.getBmiType())
// Output: "Normal weight"
```

- `getBmiPrime()`: Calculates and returns BMI Prime, which is a ratio of the calculated BMI to the upper limit of the normal BMI range (25). This value indicates how close or far an individual is from the normal weight range.

```javascript
console.log(healthCalculator.getBmiPrime())
// Output: 0.9142857142857143
```

- `getIdealWeight()`: Returns the ideal weight range in kilograms as an array [min, max] when the BMI type is 'normal weight'. This range is calculated based on height and represents a healthy weight range for the individual according to the BMI classification.

```javascript
console.log(healthCalculator.getIdealWeight())
// Output: [ 56.65625, 76.25625 ]
```

#### Body Composition methods

```javascript
const user = {
  weight: 70,
  height: 1.75,
  waist: 80,
  gender: 'male',
  neck: 37,
  hip: 100,
  unitSystem: 'metric',
}
const healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)
```

- `getWaistToHipRatio()`: Calculates the Waist-to-Hip Ratio (WHR), which is used to assess the distribution of body fat and the associated risk of health conditions.

```javascript
console.log(healthCalculator.getWaistToHipRatio())
// Output: 0.8
```

- `getWaistToHeightRatio()`: Calculates the Waist-to-Height Ratio (WHtR), a metric used to measure an individual's risk of obesity-related health issues.

```javascript
console.log(healthCalculator.getWaistToHeightRatio())
// Output: 0.45714285714285713
```

- `getBodyFatPercentage()`: Estimates body fat percentage based on various measurements such as waist, hip, neck circumference, and weight. This value provides an indication of how much of an individual's total body mass is composed of fat.

```javascript
console.log(healthCalculator.getBodyFatPercentage())
// Output: 20.149993896363505
```

- `getLeanBodyMass()`: Calculates lean body mass, using the Boer equation. This represents the weight of everything other than fat (muscles, bones, organs, etc.) and is returned in kilograms.

```javascript
console.log(healthCalculator.getLeanBodyMass())
// Output: 56.015
```

#### BMR methods

```javascript
const user = {
  weight: 70,
  height: 1.75,
  age: 30,
  gender: 'male',
  unitSystem: 'metric',
}
const healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)
```

- `getBmrHarrisBenedict()`: Calculates Basal Metabolic Rate (BMR) using the Harris-Benedict equation. Returns the estimated daily calorie requirement to maintain basic bodily functions at rest, such as breathing and circulation.

```javascript
console.log(healthCalculator.getBmrHarrisBenedict())
// Output: 1695.6670000000001
```

- `getBmrMifflinStJeor()`: Calculates Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation. Returns the estimated daily calorie requirement to maintain basic bodily functions at rest.

```javascript
console.log(healthCalculator.getBmrMifflinStJeor())
// Output: 1648.75
```

#### TDEE methods

```javascript
const user = {
  weight: 70,
  height: 1.75,
  age: 30,
  gender: 'male',
  unitSystem: 'metric',
  activityLevel: 'moderately',
}
const healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)
```

- `getTdeeHarrisBenedict()`: Calculates Total Daily Energy Expenditure (TDEE) using the Harris-Benedict equation, which takes into account BMR and activity level to estimate the total number of calories needed to maintain the current weight.

```javascript
console.log(healthCalculator.getTdeeHarrisBenedict())
// Output: 2628.2838500000003
```

- `getTdeeMifflinStJeor()`: Calculates Total Daily Energy Expenditure (TDEE) using the Mifflin-St Jeor equation. This calculation estimates the total daily calorie needs based on BMR and physical activity level.

```javascript
console.log(healthCalculator.getTdeeMifflinStJeor())
// Output: 2555.5625
```

#### Calorie based methods

```javascript
const user = {
  weight: 70,
  height: 1.75,
  age: 30,
  gender: 'male',
  unitSystem: 'metric',
  activityLevel: 'moderately',
  dailyCalories: 2800,
}
const healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)
```

- `getCaloricSurplusOrDeficit()`: Calculates the daily caloric surplus (if consuming more than needed) or deficit (if consuming less than needed), based on current calorie intake and TDEE. Returns a positive value for surplus or a negative value for deficit.

```javascript
console.log(healthCalculator.getCaloricSurplusOrDeficit())
// Output: -171.71614999999974
```

- `getEstimatedWeightChangeWeekly()`: Calculates the estimated weekly weight change based on daily caloric surplus or deficit. This value provides an approximation of how much weight the individual will gain or lose each week.

```javascript
console.log(healthCalculator.getEstimatedWeightChangeWeekly())
// Output: -0.15610559090909068
```

- `getEstimatedWeightChangeMonthly()`: Calculates the estimated weekly weight change based on daily caloric surplus or deficit. This value provides an approximation of how much weight the individual will gain or lose each month.

```javascript
console.log(healthCalculator.getEstimatedWeightChangeMonthly())
// Output: -0.66902396103896
```

- `getEstimateTimeToWeightGoal()`: Calculates the estimated time (in weeks) to reach the weight goal, based on current weight, caloric intake, and desired weight change. This method provides a timeline for reaching a specific weight target. It returns a number in weeks.

```javascript
const user = {
  weight: 70,
  height: 1.75,
  age: 30,
  gender: 'male',
  unitSystem: 'metric',
  activityLevel: 'moderately',
  dailyCalories: 2800,
  weightGoal: 65,
}
const healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)
console.log(healthCalculator.getEstimateTimeToWeightGoal())
// Output: 33
```

- `getCaloriesForWeightGoal()`: Calculates and returns the calories needed to reach the weight goal.

```javascript
const user = {
  weight: 70,
  height: 1.75,
  age: 30,
  gender: 'male',
  unitSystem: 'metric',
  activityLevel: 'moderately',
  weightGoal: 65,
  weeksToWeightGoal: 12,
}
const healthCalculator = HealthCalculatorFactory.createHealthCalculator(user)
console.log(healthCalculator.getCaloriesForWeightGoal())
// Output: 2170
```

| Method                            | weight | height | age | gender | waist | hip | neck | unitSystem | activityLevel | dailyCalories | weightGoal | weeksToWeightGoal |
| --------------------------------- | ------ | ------ | --- | ------ | ----- | --- | ---- | ---------- | ------------- | ------------- | ---------- | ----------------- |
| getBmi()                          | X      | X      |     |        |       |     |      | X          |               |               |            |                   |
| getBmiType()                      | X      | X      |     |        |       |     |      | X          |               |               |            |                   |
| getBmiPrime()                     | X      | X      |     |        |       |     |      | X          |               |               |            |                   |
| getIdealWeight()                  |        | X      |     |        |       |     |      | X          |               |               |            |                   |
| getWaistToHipRatio()              |        |        |     |        | X     | X   |      | X          |               |               |            |                   |
| getWaistToHeightRatio()           |        | X      |     |        | X     |     |      | X          |               |               |            |                   |
| getBodyFatPercentage()            |        | X      |     | X      | X     | X\* | X    | X          |               |               |            |                   |
| getLeanBodyMass()                 | X      | X      |     | X      | X     | X\* | X    | X          |               |               |            |                   |
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

I welcome contributions to improve the Body Measurements module. Please see our [CONTRIBUTING.md](https://github.com/MarkerAnn/health-calculator/blob/main/CONTRIBUTING/CONTRIBUTING.MD) file for details on how to contribute.

## Changelog

See the [CHANGELOG.md](https://github.com/MarkerAnn/health-calculator/blob/main/CHANGELOG.md) for details on version updates.

## License

This project is licensed under the ISC License. See the [LICENSE](https://github.com/MarkerAnn/health-calculator/blob/main/LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub repository](https://github.com/MarkerAnn/health-calculator/issues).
