# Changelog

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
