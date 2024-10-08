/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'
import { InterfaceHealthCalculator } from '../interfaces/InterfaceHealthCalculator.js'
import { InterfaceBmiCalculator } from '../interfaces/InterfaceBmiCalculator.js'
import { InterfaceBodyCompositionCalculator } from '../interfaces/InterfaceBodyCompositionCalculator.js'
import { InterfaceBmrCalculator } from '../interfaces/InterfaceBmrCalculator.js'
import { InterfaceTdeeCalculator } from '../interfaces/InterfaceTdeeCalculator.js'
import { InterfaceCalorieCalculator } from 'src/interfaces/InterfaceCalorieCalculator.js'

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
   * @param calorieCalculator - An instance of a calorieCalculator implementing the InterfaceCalorieCalculator
   */
  constructor(
    private user: User,
    private bmiCalculator: InterfaceBmiCalculator,
    private bodycompositionCalculator: InterfaceBodyCompositionCalculator,
    private bmrCalculator: InterfaceBmrCalculator,
    private tdeeCalculator: InterfaceTdeeCalculator,
    private calorieCalculator: InterfaceCalorieCalculator
  ) {}

  /**
   * @inheritdoc
   */
  getBmi(): number {
    return this.bmiCalculator.calculateBmi(this.user)
  }

  /**
   * @inheritdoc
   */
  getBmiType(): string {
    const bmi = this.getBmi()
    return this.bmiCalculator.calculateBmiType(bmi)
  }

  /**
   * @inheritdoc
   */
  getBmiPrime(): number {
    const bmi = this.getBmi()
    return this.bmiCalculator.calculateBmiPrime(bmi)
  }

  /**
   * @inheritdoc
   */
  getIdealWeight(): [number, number] {
    return this.bmiCalculator.calculateIdealWeight(this.user)
  }

  /**
   * @inheritdoc
   */
  getWaistToHipRatio(): number {
    return this.bodycompositionCalculator.calculateWaistToHipRatio(this.user)
  }

  /**
   * @inheritdoc
   */
  getWaistToHeightRatio(): number {
    return this.bodycompositionCalculator.calculateWaistToHeightRatio(this.user)
  }

  /**
   * @inheritdoc
   */
  getBodyFatPercentage(): number {
    return this.bodycompositionCalculator.calculateBodyFatPercentage(this.user)
  }

  /**
   * @inheritdoc
   */
  getLeanBodyMass(): number {
    return this.bodycompositionCalculator.calculateLeanBodyMass(this.user)
  }
  /**
   * @inheritdoc
   */
  getBmrHarrisBenedict(): number {
    return this.bmrCalculator.calculateBmrHarrisBenedict(this.user)
  }

  /**
   * @inheritdoc
   */
  getBmrMifflinStJeor(): number {
    return this.bmrCalculator.calculateBmrMifflinStJeor(this.user)
  }

  /**
   * @inheritdoc
   */
  getTdeeHarrisBenedict(): number {
    const bmrHarrisBenedict = this.getBmrHarrisBenedict()
    return this.tdeeCalculator.calculateTdeeHarrisBenedict(
      this.user,
      bmrHarrisBenedict
    )
  }

  /**
   * @inheritdoc
   */
  getTdeeMifflinStJeor(): number {
    const bmrMifflinStJeor = this.getBmrMifflinStJeor()
    return this.tdeeCalculator.calculateTdeeMifflinStJeor(
      this.user,
      bmrMifflinStJeor
    )
  }

  /**
   * @inheritdoc
   */
  getCaloricSurplusOrDeficit(): number {
    const tdee = this.getTdeeHarrisBenedict()
    return this.calorieCalculator.calculateCaloricSurplusOrDeficit(
      this.user,
      tdee
    )
  }

  /**
   * @inheritdoc
   */
  getEstimatedWeightChangeWeekly(): number {
    const calorieSurplusOrDeficit = this.getCaloricSurplusOrDeficit()
    return this.calorieCalculator.calculateEstimatedWeightChangeWeekly(
      calorieSurplusOrDeficit,
      this.user
    )
  }

  /**
   * @inheritdoc
   */
  getEstimatedWeightChangeMonthly(): number {
    const calorieSurplusOrDeficit = this.getCaloricSurplusOrDeficit()
    return this.calorieCalculator.calculateEstimatedWeightChangeMonthly(
      calorieSurplusOrDeficit,
      this.user
    )
  }

  /**
   * @inheritdoc
   */
  getEstimateTimeToWeightGoal(): number {
    const calorieSurplusOrDeficit = this.getCaloricSurplusOrDeficit()
    return this.calorieCalculator.calculateEstimatedWeeksToWeightGoal(
      calorieSurplusOrDeficit,
      this.user
    )
  }

  /**
   * @inheritdoc
   */
  getCaloriesForWeightGoal(): number {
    const tdee = this.getTdeeHarrisBenedict()
    return this.calorieCalculator.calculateCaloriesForWeightGoal(
      this.user,
      tdee
    )
  }
}
