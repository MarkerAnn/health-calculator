import { HealthCalculator } from './calculators/HealthCalculator'
import { User } from './models/User'

const Arne: User = {
  weight: 180,
  height: 5.9,
  unitSystem: 'imperial',
}

const healthCalc = new HealthCalculator(Arne)
const ArnesBMI = healthCalc.calculateBmi()
const arnesBMIType = healthCalc.calculateBmiType()
console.log(ArnesBMI, arnesBMIType)

// TODO: Handle measurements, e.g. imperial units
// TODO: Send an useribject instead of weight and height
// TODO: Get the number of BMI
// TODO: Exception om heigh > 2.5 (=angett längd i cm istället för m)
// TODO: BMI körs trots att det blir validation error
// TODO: lägga till typescript som dependencies i package.json?
