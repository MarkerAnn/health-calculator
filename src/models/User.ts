/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

/**
 * Represents a user with health-related attributes.
 */
export interface User {
  /** User's weight in kg (metric) or lbs (imperial) */
  weight: number
  /** User's height in meters (metric) or feet (imperial) */
  height: number
  /** User's age in years (optional) */
  age?: number
  /** User's gender (optional) */
  gender?: 'male' | 'female'
  /** User's waist measurement in cm (metric) or inches (imperial) (optional) */
  waist?: number
  /** User's hip measurement in cm (metric) or inches (imperial) (optional) */
  hip?: number
  /** User's neck measurement in cm (metric) or inches (imperial) (optional) */
  neck?: number
  /** The unit system used for measurements */
  unitSystem: 'metric' | 'imperial'
  /** User's activity level (optional) */
  activityLevel?: 'sedentary' | 'lightly' | 'moderately' | 'very' | 'extremely'
  /** User's daily calories intake (optional) */
  dailyCalories?: number
  /** User's weight goal in kg (metric) or lbs (imperial) */
  weightGoal?: number
  /** User's time frame to reach a certain weigh goal, in weeks (optional) */
  weeksToWeightGoal?: number
}
