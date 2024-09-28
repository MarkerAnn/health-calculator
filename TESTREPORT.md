# Test Report

## Summary
- **Date:** Sat Sep 28 01:17:46 UTC 2024
- **Commit:** f76350a591bb3914af5362ea8e2f6cb81da3ae3a

## Test Results
- Suites: 5
- Tests: 60

## Test Suites

| Suite | Tests | Duration |
|-------|-------|----------|
| BmrCalculator | 10 | 3.083s |
| BodyCompositionCalculator | 12 | 3.064s |
| TdeeCalculator | 20 | 3.065s |
| BmiCalculator | 0 | 0.136s |
| validateUserInput | 10 | 0.162s |

## Detailed Test Results


### BmrCalculator &gt; calculateBmrHarrisBenedict
✅ should calculate correct BMR for normal weight male (metric) ()
✅ should calculate correct BMR for overweight female (metric) ()
✅ should calculate correct BMR for underweight male (imperial) ()
✅ should calculate correct BMR for obese female (imperial) ()
✅ should throw an error when age is missing ()

### BmrCalculator &gt; calculateBmrMifflinStJeor
✅ should calculate correct BMR for normal weight male (metric) ()
✅ should calculate correct BMR for overweight female (metric) ()
✅ should calculate correct BMR for underweight male (imperial) ()
✅ should calculate correct BMR for obese female (imperial) ()
✅ should throw an error when age is missing ()

### BodyCompositionCalculator &gt; calculateWaistToHipRatio
✅ should calculate correct waist to hip ratio for normal weight male (metric) ()
✅ should calculate correct waist to hip ratio for overweight female (metric) ()
✅ should throw an error when waist or hip measurements are missing ()

### BodyCompositionCalculator &gt; calculateWaistToHeightRatio
✅ should calculate correct waist to height ratio for normal weight male (metric) ()
✅ should calculate correct waist to height ratio for overweight female (metric) ()
✅ should throw an error when waist or height measurements are missing ()

### BodyCompositionCalculator &gt; calculateBodyFatPercentage
✅ should calculate correct body fat percentage for normal weight male (metric) ()
✅ should calculate correct body fat percentage for overweight female (metric) ()
✅ should throw an error when waist measurement is missing ()
✅ should throw an error when neck measurement is missing ()
✅ should throw an error when hip measurement is missing for female ()
✅ should throw an error for invalid gender ()

### TdeeCalculator &gt; calculateTdeeMifflinStJeor
✅ should calculate correct TDEE for normal weight male (metric) with moderate activity ()
✅ should calculate correct TDEE for overweight female (metric) with sedentary activity ()
✅ should calculate correct TDEE for underweight male (imperial) with very active lifestyle ()
✅ should throw an error when age is missing ()
✅ should throw an error when activity level is missing ()

### TdeeCalculator &gt; calculateTdeeHarrisBenedict
✅ should calculate correct TDEE for normal weight male (metric) with moderate activity ()
✅ should calculate correct TDEE for overweight female (metric) with sedentary activity ()
✅ should calculate correct TDEE for underweight male (imperial) with very active lifestyle ()
✅ should throw an error when age is missing ()
✅ should throw an error when activity level is missing ()

### TdeeCalculator &gt; Activity level factors &gt; Mifflin-St Jeor
✅ should use correct activity factor for sedentary activity ()
✅ should use correct activity factor for lightly activity ()
✅ should use correct activity factor for moderately activity ()
✅ should use correct activity factor for very activity ()
✅ should use correct activity factor for extremely activity ()

### TdeeCalculator &gt; Activity level factors &gt; Harris-Benedict
✅ should use correct activity factor for sedentary activity ()
✅ should use correct activity factor for lightly activity ()
✅ should use correct activity factor for moderately activity ()
✅ should use correct activity factor for very activity ()
✅ should use correct activity factor for extremely activity ()

### HealthCalculatorFactory and BMI calculations &gt; Metric users
✅ should calculate correct BMI for normal weight male ()
✅ should calculate correct BMI for overweight female ()

### HealthCalculatorFactory and BMI calculations &gt; Imperial users
✅ should calculate correct BMI for underweight male ()
✅ should calculate correct BMI for obese female ()

### HealthCalculatorFactory and BMI calculations &gt; BMI Prime and Ideal Weight
✅ should calculate correct BMI Prime ()
✅ should calculate correct Ideal Weight range ()

### HealthCalculatorFactory and BMI calculations &gt; Error handling
✅ should throw an error for invalid user input ()
✅ should throw an error for negative values ()

### validateUserInput
✅ should validate correct metric user input without throwing ()
✅ should validate correct imperial user input without throwing ()
✅ should throw for missing required fields ()
✅ should throw for negative values ()
✅ should not throw for missing optional fields ()
✅ should warn for age under 18 ()
✅ should throw for out of range metric weight ()
✅ should throw for out of range imperial weight ()
✅ should throw for out of range metric height ()
✅ should throw for out of range imperial height ()
