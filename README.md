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
- Support for both metric and imperial units

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
console.log('Body Fat Percentage:', healthCalculator.getBodyFatPercantage())
console.log('TDEE (Mifflin-St Jeor):', healthCalculator.getTdeeMifflinStJeor())
```

## API Documentation

### User Object

The `User` object is used to provide input data for calculations. It has the following properties:

- `weight`: number (kg for metric, lbs for imperial)
- `height`: number (meters for metric, feet for imperial)
- `age`: number (optional)
- `gender`: 'male' | 'female' (optional)
- `waist`: number (cm for metric, inches for imperial, optional)
- `hip`: number (cm for metric, inches for imperial, optional)
- `neck`: number (cm for metric, inches for imperial, optional)
- `unitSystem`: 'metric' | 'imperial'
- `activityLevel`: 'sedentary' | 'lightly' | 'moderately' | 'very' | 'extremely' (optional)

### HealthCalculator Methods

- `getBmi()`: Calculates Body Mass Index
- `getBmiType()`: Returns the BMI category (e.g., 'normal weight', 'overweight')
- `getBmiPrime()`: Calculates BMI Prime
- `getIdealWeight()`: Returns the ideal weight range as [min, max]
- `getWaistToHipRatio()`: Calculates Waist-to-Hip Ratio
- `getWaistToHeightRatio()`: Calculates Waist-to-Height Ratio
- `getBodyFatPercantage()`: Estimates body fat percentage
- `getBmrHarrisBenedict()`: Calculates BMR using Harris-Benedict equation
- `getBmrMifflinStJeor()`: Calculates BMR using Mifflin-St Jeor equation
- `getTdeeHarrisBenedict()`: Calculates TDEE using Harris-Benedict equation
- `getTdeeMifflinStJeor()`: Calculates TDEE using Mifflin-St Jeor equation

| Method                  | weight | height | age | gender | waist | hip | neck | unitSystem | activityLevel |
| ----------------------- | ------ | ------ | --- | ------ | ----- | --- | ---- | ---------- | ------------- |
| getBmi()                | X      | X      |     |        |       |     |      | X          |               |
| getBmiType()            | X      | X      |     |        |       |     |      | X          |               |
| getBmiPrime()           | X      | X      |     |        |       |     |      | X          |               |
| getIdealWeight()        |        | X      |     |        |       |     |      | X          |               |
| getWaistToHipRatio()    |        |        |     |        | X     | X   |      | X          |               |
| getWaistToHeightRatio() |        | X      |     |        | X     |     |      | X          |               |
| getBodyFatPercantage()  |        | X      |     | X      | X     | X\* | X    | X          |               |
| getBmrHarrisBenedict()  | X      | X      | X   | X      |       |     |      | X          |               |
| getBmrMifflinStJeor()   | X      | X      | X   | X      |       |     |      | X          |               |
| getTdeeHarrisBenedict() | X      | X      | X   | X      |       |     |      | X          | X             |
| getTdeeMifflinStJeor()  | X      | X      | X   | X      |       |     |      | X          | X             |

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

I welcome contributions to improve the Body Measurements module. Please see our [CONTRIBUTING.md](CONTRIBUTING.md) file for details on how to contribute.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue on our [GitHub repository](https://github.com/MarkerAnn/health-calculator/issues).
