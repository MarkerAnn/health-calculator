import { User } from '../models/User'

/**
 * Creates a shallow copy of a User object.
 *
 * @param user - The User object to copy
 * @returns A new User object with the same properties as the input
 */
export function copyUser(user: User): User {
  return { ...user }
}
