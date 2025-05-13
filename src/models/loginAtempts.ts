import {
  pgTable,
  serial,
  uuid,
  timestamp,
  varchar,
  index
} from 'drizzle-orm/pg-core';

export const loginAttempts = pgTable(
  'login_attempts',
  {
    attemptId: serial('attempt_id').primaryKey(),
    userId: uuid('user_id').notNull(),
    loginTime: timestamp('login_time', { withTimezone: true }).defaultNow(),
    ipAddress: varchar('ip_address', { length: 45 }),
    failureReason: varchar('failure_reason', { length: 255 }),
    lockoutUntil: timestamp('lockout_until', { withTimezone: true }),
  },
  (loginAttempts) => {
    return [
      index('user_id_login_time_idx').on(
        loginAttempts.userId,
        loginAttempts.loginTime
      ),
      index('ip_address_login_time_idx').on(
        loginAttempts.ipAddress,
        loginAttempts.loginTime
      ),
      index('user_id_idx').on(loginAttempts.userId),
    ];
  }
);