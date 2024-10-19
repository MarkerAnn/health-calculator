# Test Report

## Environment
- Node.js version: v20.18.0
- Jest version: ^29.7.0

## Summary
- **Date:** Sat Oct 19 12:26:24 UTC 2024
- **Commit:** a600c0a8fa0e861140ede0aceed46ae99141e9ed

## Test Results
- Suites: 6
- Tests: 87

## Test Suites

| Suite | Tests | Duration |
|-------|-------|----------|
| CalorieCalculator | 14 | 3.767s |
| BmiCalculator | 0 | 0.396s |
| TdeeCalculator | 20 | 4.144s |
| BodyCompositionCalculator | 15 | 4.171s |
| BmrCalculator | 10 | 0.117s |
| validateUserInput | 17 | 0.154s |

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
✅ should throw an error for missing unit system ()
✅ should throw an error for invalid unit system ()
✅ should not throw for missing weight and height ()
✅ should throw an error for negative weight if provided ()
✅ should throw a validation error for negative height if provided ()

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

### validateUserInput
✅ should validate correct metric user input without throwing ()
✅ should validate correct imperial user input without throwing ()
✅ should not throw for missing optional fields ()
✅ should throw for missing unit system ()
✅ should throw for invalid unit system ()
✅ should warn for age under 18 ()
✅ should throw for out of range metric weight if provided ()
✅ should throw for out of range imperial weight if provided ()
✅ should throw for out of range metric height if provided ()
✅ should throw for out of range imperial height if provided ()
✅ should validate user with valid goals without throwing ()
✅ should throw for negative daily calories if provided ()
✅ should throw for invalid weight goal if provided ()
✅ should throw for negative weeks to weight goal if provided ()
✅ should throw for non-numeric weight if provided ()
✅ should throw for non-numeric height if provided ()
✅ should not throw for missing weight and height ()
