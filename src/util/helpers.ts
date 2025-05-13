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


import { loginAttempts } from "@/models/loginAtempts";
import db from "@/lib/database";
import {eq, and, gt, sql, desc} from "drizzle-orm"

import {
    LOCKOUT_WINDOW_MINUTES,
    LOCKOUT_DURATION_MINUTES,
    MAX_FAILED_ATTEMPTS
} from "@/configs/authConfig";

export async function recordFailedLogin(userId: string, ipAddress: string, failureReason: string) {
    try {
        const [result] = await db.insert(loginAttempts)
            .values({ userId, ipAddress, failureReason })
            .returning({ attemptId: loginAttempts.attemptId });
        if (result.attemptId) {
            return true;
        }
        console.log(`Failed login recorded for user ID: ${userId} from IP: ${ipAddress}`);
    } catch (error: any) {
        console.error(`Error recording failed login for user ID: ${userId}:`, error);
        throw new Error(`Failed to record login attempt: ${error.message}`);
    }
}

export async function isAccountLocked(userId: string): Promise<boolean> {
    try {
        const lockedAttempt = await db.select({ lockoutUntil: loginAttempts.lockoutUntil })
            .from(loginAttempts)
            .where(and(eq(loginAttempts.userId, userId), gt(loginAttempts.lockoutUntil, new Date())))
            .limit(1);
        return lockedAttempt.length > 0 && lockedAttempt[0]?.lockoutUntil !== null;

    } catch (error: any) {
        console.error(`Error checking account lock status for user ID: ${userId}:`, error);
        throw new Error(`Failed to check account lock status: ${error.message}`);
    }
}

export async function attemptLockout(userId: string) {
    try {
        const cutoff = new Date(Date.now() - LOCKOUT_WINDOW_MINUTES * 60 * 1000);
        const recentFailedAttempts = await db.select()
            .from(loginAttempts)
            .where(and(
                eq(loginAttempts.userId, userId),
                gt(loginAttempts.loginTime, cutoff),
                sql`${loginAttempts.failureReason} IS NOT NULL`
            ))
            .orderBy(desc(loginAttempts.loginTime))
            .limit(MAX_FAILED_ATTEMPTS);

        if (recentFailedAttempts.length >= MAX_FAILED_ATTEMPTS) {
            const lockoutTime = new Date(Date.now() + LOCKOUT_DURATION_MINUTES * 60 * 1000);
            const lastFailedAttempt = recentFailedAttempts[0];

            if (lastFailedAttempt) {
                await db.update(loginAttempts)
                    .set({ lockoutUntil: lockoutTime })
                    .where(eq(loginAttempts.attemptId, lastFailedAttempt.attemptId));
                console.log(`Account locked for user ID: ${userId} until ${lockoutTime.toISOString()}`);
                return true; // Account locked
            }
        }
        return false; // Account not locked yet
    } catch (error: any) {
        console.error(`Error attempting lockout for user ID: ${userId}:`, error);
        throw new Error(`Failed to attempt account lockout: ${error.message}`);
    }
}