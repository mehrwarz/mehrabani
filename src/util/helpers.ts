import bcrypt from 'bcryptjs';

/**
 * Hashes a plain password using bcrypt with a specified number of salt rounds.
 *
 * @param plainPassword The password to hash (String).
 * @param saltRounds The number of salt rounds to use for hashing (number). Higher values are more secure but slower.
 * @returns A promise that resolves to the hashed password (String).
 * @throws If an error occurs during the hashing process.
 */
export async function saltAndHashPassword(plainPassword: string, saltRounds: number): Promise<string> {
    try {
        // Generate a salt
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password using the generated salt
        const hashedPassword = await bcrypt.hash(plainPassword, salt);
        return hashedPassword;
    } catch (error: any) {
        console.error("Error during password hashing:", error);
        throw error; // Re-throw the error to be handled by the caller
    }
}


import { randomBytes } from 'crypto';

/**
 * Generates a random string of a specified length using a predefined character set.
 *
 * @param length The desired length of the random string (number, default: 16).
 * @returns The generated random string (String).
 */
export function randomString(length: number = 16): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

/**
 * Generates a cryptographically secure random string of a specified length (hexadecimal).
 *
 * @param length The desired length of the random string (number, default: 16).
 * @returns The generated cryptographically secure random string (String, in hexadecimal format).
 */
export function secureRandomString(length: number = 16): string {
    const buffer = randomBytes(Math.ceil(length / 2));
    return buffer.toString('hex').slice(0, length);
}