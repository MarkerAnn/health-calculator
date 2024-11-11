# Changelog

## [1.1.2] - 2024-11-11

### Fixed

- Resolved a case sensitivity issue in `dist` files where `unitConverter.js` was incorrectly capitalized, causing build errors on Linux systems.

## [1.1.1] - 2024-11-04

### Changed

- Corrected a typo in `README.md`.

## [1.1.0] - 2024-10-19

### Added

- Made `weight` and `height` fields optional in the User object.

### Changed

- Updated the fat percentage calculation formula to provide more accurate values.

### Fixed

- Corrected incorrect fat percentage values that were returned with the previous formula.

## [1.0.6] - 2024-10-13

### Added

- Added `CHANGELOG.md` to document changes across versions.
- Introduced a more general validation function for weight and height, reducing code repetition and improving function size.
- Added `ActivityLevel` as enums and moved magic numbers to constants in `TdeeCalculator`.

### Changed

- Refactored constants for magic numbers in `CalorieCalculator`, `BodyCompositionCalculator`, and `BmrCalculator` for better consistency.
- Updated `README.md` after feedback, reducing the number of examples in the usage section and improving API documentation.

### Removed

- Deleted unnecessary `console.log` related to validation success in `validateUserInput`.

## [1.0.5] - 2024-10-03

### Changed

- Refactored methods for improved structure and readability.
- Refactored validation functions to streamline logic and reduce redundancy.
