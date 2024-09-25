export interface InterfaceHealthCalculator {
  getBmi(): number
  getBmiType(): string
  getBmiPrime(): number
  getIdealWeight(): [number, number]
  getWaistToHipRatio(): number
  getWaistToHeightRatio(): number
  getBodyFatPercantage(): number
  getBmrHarrisBenedict(): number
  getBmrMifflinStJeor(): number
  getTdeeHarrisBenedict(): number
  getTdeeMifflinStJeor(): number
}
