// TODO: Lägg alla funktioner i detta interface. Ta bort denna kommentar sedan.

export interface InterfaceHealthCalculation {
  calculateBmi(): number
  calculateBmiType(): string
  calculateBmiPrime(): number
  calculateBmrHarrisBenedict(): number
  calculateBmrMifflinStJeor(): number
  calculateTdee(): number
  calculateIdealWeight(): [number, number]
  calculateBodyFatPercentage(): number
  calculateWaistToHipRatio(): number // Lägg till typ här också?
  // calculateWaistToHeightRatio(): number
}
