import bcrypt from 'bcryptjs';
import { number } from 'zod';

export async function saltAndHashPassword(plainPassword: string) {
  try {
    // Generate a salt
    const saltRounds = parseInt(process.env.PASSWORD_SALT_ROUND) || 10; // You can adjust the number of salt rounds for security vs. performance
    const salt = bcrypt.genSalt(saltRounds);

    // Hash the password using the generated salt
    const hashedPassword = bcrypt.hash(plainPassword, salt);

    return hashedPassword;
  } catch (error) {
    throw error; // Re-throw the error to be handled by the caller
  }
}
