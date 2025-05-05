import bcrypt from 'bcryptjs';
import { SQL } from 'drizzle-orm';
import { number } from 'zod';

export async function saltAndHashPassword(plainPassword: string) {
  try {
    // Generate a salt
    const saltRounds = parseInt(process.env.PASSWORD_SALT_ROUND) || 10; // You can adjust the number of salt rounds for security vs. performance
    const salt = bcrypt.genSalt(saltRounds);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(plainPassword, salt)
    return hashedPassword;
  } catch (error) {
    throw error; // Re-throw the error to be handled by the caller
  }
}



export function randomString(length = 16): () => any {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}