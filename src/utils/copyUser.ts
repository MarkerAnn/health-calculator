import { User } from '../models/User'

export function copyUser(user: User): User {
  return { ...user }
}
