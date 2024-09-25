import { User } from '../models/User'
import { InterfaceHealthCalculator } from '../interfaces/InterfaceHealthCalculator'
import { InterfaceBmiCalculator } from '../interfaces/InterfaceBmiCalculator'
import { InterfaceBodyCompositionCalculator } from '../interfaces/InterfaceBodyCompositionCalculator'
import { InterfaceBmrCalculator } from '../interfaces/InterfaceBmrCalculator'
import { InterfaceTdeeCalculator } from '../interfaces/InterfaceTdeeCalculator'

/**
 * HealthCalculator is responsible for calculating various health-related metrics
 * such as BMI, body fat percentage, BMR, and TDEE for a given user.
 *
 * The class relies on different calculators (BMI, Body Composition, BMR, and TDEE)
 * that are passed during instantiation to perform these calculations.
 */
export class HealthCalculator implements InterfaceHealthCalculator {
  /**
   * Constructs an instance of the HealthCalculator.
   *
   * @param user - The user for whom the health calculations will be performed.
   * @param bmiCalculator - An instance of a BMI calculator implementing the InterfaceBmiCalculator.
   * @param bodycompositionCalculator - An instance of a body composition calculator implementing the InterfaceBodyCompositionCalculator.
   * @param bmrCalculator - An instance of a BMR calculator implementing the InterfaceBmrCalculator.
   * @param tdeeCalculator - An instance of a TDEE calculator implementing the InterfaceTdeeCalculator.
   */
  constructor(
    private user: User,
    private bmiCalculator: InterfaceBmiCalculator,
    private bodycompositionCalculator: InterfaceBodyCompositionCalculator,
    private bmrCalculator: InterfaceBmrCalculator,
    private tdeeCalculator: InterfaceTdeeCalculator
  ) {}

  /**
   * Calculates the Body Mass Index (BMI) for the user.
   *
   * @returns The BMI as a number.
   */
  getBmi(): number {
    return this.bmiCalculator.calculateBmi(this.user)
  }

  /**
   * Determines the BMI classification based on the calculated BMI.
   *
   * @returns A string representing the BMI type (e.g., 'Underweight', 'Normal', 'Overweight', etc.).
   */
  getBmiType(): string {
    const bmi = this.getBmi()
    return this.bmiCalculator.calculateBmiType(bmi)
  }

  /**
   * Calculates the BMI Prime, which is a ratio of the user's BMI to the upper limit of normal BMI (25).
   *
   * @returns The BMI Prime as a number.
   */
  getBmiPrime(): number {
    const bmi = this.getBmi()
    return this.bmiCalculator.calculateBmiPrime(bmi)
  }

  /**
   * Calculates the user's ideal weight range based on their height.
   *
   * @returns A tuple containing the lower and upper ideal weight limits in kilograms.
   */
  getIdealWeight(): [number, number] {
    return this.bmiCalculator.calculateIdealWeight(this.user)
  }

  /**
   * Calculates the user's waist-to-hip ratio.
   *
   * @returns The waist-to-hip ratio as a number.
   */
  getWaistToHipRatio(): number {
    return this.bodycompositionCalculator.calculateWaistToHipRatio(this.user)
  }

  /**
   * Calculates the user's waist-to-height ratio.
   *
   * @returns The waist-to-height ratio as a number.
   */
  getWaistToHeightRatio(): number {
    return this.bodycompositionCalculator.calculateWaistToHeightRatio(this.user)
  }

  /**
   * Calculates the user's body fat percentage based on their measurements.
   *
   * @returns The body fat percentage as a number.
   */
  getBodyFatPercantage(): number {
    return this.bodycompositionCalculator.calculateBodyFatPercentage(this.user)
  }

  /**
   * Calculates the Basal Metabolic Rate (BMR) using the Harris-Benedict equation.
   *
   * @returns The BMR as a number in calories/day.
   */
  getBmrHarrisBenedict(): number {
    return this.bmrCalculator.calculateBmrHarrisBenedict(this.user)
  }

  /**
   * Calculates the Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation.
   *
   * @returns The BMR as a number in calories/day.
   */
  getBmrMifflinStJeor(): number {
    return this.bmrCalculator.calculateBmrMifflinStJeor(this.user)
  }

  /**
   * Calculates the Total Daily Energy Expenditure (TDEE) using the Harris-Benedict equation.
   *
   * @returns The TDEE as a number in calories/day.
   */
  getTdeeHarrisBenedict(): number {
    const bmrHarrisBenedict = this.getBmrHarrisBenedict()
    return this.tdeeCalculator.calculateTdeeHarrisBenedict(
      this.user,
      bmrHarrisBenedict
    )
  }

  /**
   * Calculates the Total Daily Energy Expenditure (TDEE) using the Mifflin-St Jeor equation.
   *
   * @returns The TDEE as a number in calories/day.
   */
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
