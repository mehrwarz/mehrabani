import bcrypt from 'bcryptjs';

/**
 * 
 * @param plainPassword String
 * @param saltRounds number
 * @returns String
 */

export async function saltAndHashPassword(plainPassword: string, saltRounds:number) {
  try {
    // Generate a salt// You can adjust the number of salt rounds for security vs. performance
    const salt = await bcrypt.genSalt(saltRounds);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(plainPassword, salt)
    return hashedPassword;
  } catch (error) {
    console.warn("Error on hashing: ", error)
    throw error; // Re-throw the error to be handled by the caller
  }
}


/**
 * 
 * @param length number
 * @returns String
 */

export function randomString(length = 16): any {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}