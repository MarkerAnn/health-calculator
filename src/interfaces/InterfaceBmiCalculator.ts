import { User } from '../models/User'

/**
 * Interface for BMI Calculator.
 * Provides methods to calculate BMI, BMI type, ideal weight, and BMI prime.
 */
export interface InterfaceBmiCalculator {
  /**
   * Calculates the Body Mass Index (BMI) for a given user.
   *
   * @param {User} user - The user object containing weight (in kilograms) and height (in meters).
   * @returns The calculated BMI as a number.
   */
  calculateBmi(user: User): number

  /**
   * Determines the BMI classification (type) based on the given BMI value.
   * @param {number} bmi - The calculated BMI value.
   * @returns {string} The BMI type (e.g., 'underweight', severe thinness, 'normal weight', 'obese, class II', etc.).
   */
  calculateBmiType(bmi: number): string

  /**
   * Calculates the ideal weight range for the user based on their height.
   * The range is calculated using the 'Normal' BMI range.
   *
   * @param {User} user - The user object containing height (in meters).
   * @returns {[number, number]} A tuple containing the minimum and maximum ideal weight in kilograms.
   */
  calculateIdealWeight(user: User): [number, number]

  /**
   * Calculates the BMI Prime, which is the ratio of the user's BMI to the upper limit of the normal BMI range (25).
   * @param bmi - The BMI value to evaluate.
   * @returns The calculated BMI Prime as a number.
   */
  calculateBmiPrime(bmi: number): number
}
