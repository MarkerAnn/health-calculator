export interface User {
  weight: number
  height: number
  age?: number
  gender?: 'male' | 'female'
  waist?: number
  hip?: number
  unitSystem: 'metric' | 'imperial'
  activityLevel?: 'sedentary' | 'lightly' | 'moderately' | 'very' | 'extremely'
}
// TODO: testa om det glr skillnad på stora och små bokstäver
