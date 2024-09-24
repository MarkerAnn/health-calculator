import { User } from '../models/User'

export interface InterfaceBmiCalculator {
  calculateBmi(user: User): number
  calculateBmiType(bmi: number): string
  calculateIdealWeight(user: User): [number, number]
  calculateBmiPrime(bmi: number): number
}
