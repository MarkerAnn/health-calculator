/**
 * @license
 * Copyright (c) [2024] [Angelica Marker]. ISC License. See LICENSE for details.
 */

import { User } from '../models/User.js'

/**
 * Creates a shallow copy of a User object.
 *
 * @param user - The User object to copy
 * @returns A new User object with the same properties as the input
 */
export function copyUser(user: User): User {
  return { ...user }
}
