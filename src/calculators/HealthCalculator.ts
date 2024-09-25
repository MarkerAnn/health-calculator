import { User } from '../models/User'
import { InterfaceHealthCalculator } from '../interfaces/InterfaceHealthCalculator'
import { InterfaceBmiCalculator } from '../interfaces/InterfaceBmiCalculator'
import { InterfaceBodyCompositionCalculator } from '../interfaces/InterfaceBodyCompositionCalculator'
import { InterfaceBmrCalculator } from '../interfaces/InterfaceBmrCalculator'
import { InterfaceTdeeCalculator } from '../interfaces/InterfaceTdeeCalculator'
export class HealthCalculator implements InterfaceHealthCalculator {
  constructor(
    private user: User,
    private bmiCalculator: InterfaceBmiCalculator,
    private bodycompositionCalculator: InterfaceBodyCompositionCalculator,
    private bmrCalculator: InterfaceBmrCalculator,
    private tdeeCalculator: InterfaceTdeeCalculator
  ) {}

  getBmi(): number {
    return this.bmiCalculator.calculateBmi(this.user)
  }

  getBmiType(): string {
    const bmi = this.getBmi()
    return this.bmiCalculator.calculateBmiType(bmi)
  }

  getBmiPrime(): number {
    const bmi = this.getBmi()
    return this.bmiCalculator.calculateBmiPrime(bmi)
  }

  getIdealWeight(): [number, number] {
    return this.bmiCalculator.calculateIdealWeight(this.user)
  }

  getWaistToHipRatio(): number {
    return this.bodycompositionCalculator.calculateWaistToHipRatio(this.user)
  }

  getWaistToHeightRatio(): number {
    return this.bodycompositionCalculator.calculateWaistToHeightRatio(this.user)
  }

  getBodyFatPercantage(): number {
    return this.bodycompositionCalculator.calculateBodyFatPercentage(this.user)
  }

  getBmrHarrisBenedict(): number {
    return this.bmrCalculator.calculateBmrHarrisBenedict(this.user)
  }

  getBmrMifflinStJeor(): number {
    return this.bmrCalculator.calculateBmrMifflinStJeor(this.user)
  }

  getTdeeHarrisBenedict(): number {
    const bmrHarrisBenedict = this.getBmrHarrisBenedict()
    return this.tdeeCalculator.calculateTdeeHarrisBenedict(
      this.user,
      bmrHarrisBenedict
    )
  }

  getTdeeMifflinStJeor(): number {
    const bmrMifflinStJeor = this.getBmrMifflinStJeor()
    return this.tdeeCalculator.calculateTdeeMifflinStJeor(
      this.user,
      bmrMifflinStJeor
    )
  }
}

// // TODO: gå ingeom metoderna, fett procent är ganska stor, flytta över något till validate?
// // TODO: lägg in en gemensam hjälpfunktion heightToCentimeter?
// // TODO: Lägg in JSDoc, input och return
