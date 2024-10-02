# Test Report

## Environment
- Node.js version: v20.17.0
- Jest version: ^29.7.0

## Summary
- **Date:** Wed Oct  2 15:47:00 UTC 2024
- **Commit:** 17ec12de8e8fa31a5b1649d81a7a93e9a239ad24

## Test Results
- Suites: 6
- Tests: 83

## Test Suites

| Suite | Tests | Duration |
|-------|-------|----------|
| CalorieCalculator | 14 | 3.962s |
| BmrCalculator | 10 | 0.342s |
| TdeeCalculator | 20 | 4.318s |
| BodyCompositionCalculator | 15 | 4.337s |
| validateUserInput | 16 | 0.155s |
| BmiCalculator | 0 | 0.146s |

## Detailed Test Results


### CalorieCalculator &gt; calculateCaloricSurplusOrDeficit
✅ should calculate caloric surplus correctly ()
✅ should calculate caloric deficit correctly ()
✅ should throw an error if dailyCalories is not provided ()

### CalorieCalculator &gt; calculateEstimatedWeightChangeWeekly
✅ should calculate weekly weight gain correctly ()
✅ should calculate weekly weight loss correctly ()

### CalorieCalculator &gt; calculateEstimatedWeightChangeMonthly
✅ should calculate monthly weight gain correctly ()
✅ should calculate monthly weight loss correctly ()

### CalorieCalculator &gt; calculateEstimatedWeeksToWeightGoal
✅ should calculate weeks to weight gain goal correctly ()
✅ should calculate weeks to weight loss goal correctly ()
✅ should throw an error if weightGoal is not provided ()

### CalorieCalculator &gt; calculateCaloriesForWeightGoal
✅ should calculate daily calories for weight gain goal correctly ()
✅ should calculate daily calories for weight loss goal correctly ()
✅ should throw an error if weightGoal is not provided ()
✅ should throw an error if weeksToWeightGoal is not provided ()

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

### BodyCompositionCalculator &gt; calculateLeanBodyMass
✅ should calculate correct lean body mass for normal weight male (metric) ()
✅ should calculate correct lean body mass for overweight female (metric) ()
✅ should throw an error for invalid gender ()

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
✅ should validate user with valid goals without throwing ()
✅ should throw for negative daily calories ()
✅ should throw for invalid weight goal ()
✅ should throw for negative weeks to weight goal ()
✅ should throw for non-numeric weight ()
✅ should throw for non-numeric height ()

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
