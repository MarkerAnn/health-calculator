export interface User {
  weight: number
  height: number
  age?: number
  gender: 'male' | 'female'
  waist?: number
  hip?: number
  unitSystem: 'metric' | 'imperial'
  activityLevel?:  
}
