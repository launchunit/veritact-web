import { env as envs } from 'node:process';
import { z } from 'zod/v4';
import type { ReadonlyDeep } from 'type-fest';

/**
 * Server configuration schema (single source of truth)
 */
const schema = z
  .strictObject({
    NODE_ENV: z.string().min(3).toLowerCase(),

    /**
     * Service details (using Otel standard convention for "service")
     */
    service: z.strictObject({
      name: z.string().min(3).toLowerCase(),
      version: z
        .string()
        .min(3)
        .overwrite((val) => val.substring(0, 8)),
      environment: z.preprocess(
        function (val) {
          if (String(val).startsWith('prod')) {
            return 'production';
          } else if (String(val).startsWith('dev')) {
            return 'development';
          }
          return val;
        },
        z.enum(['production', 'development', 'preview', 'local'])
      ),
    }),

    /**
     * Edge logger
     */
    logger: z.strictObject({
      level: z.enum(['debug', 'info', 'warn', 'error', 'fatal']),
      format: z.enum(['pretty', 'json']), // Pretty format is only used in local development
    }),
  })
  .readonly();

/**
 * Validate config schema using zod (runs once per process)
 */
const validated = schema.safeParse({
  NODE_ENV: envs['NODE_ENV'],
  service: {
    name: envs['OTEL_SERVICE_NAME'],
    version: envs['VERCEL_GIT_COMMIT_SHA'],
    environment: envs['VERCEL_ENV'],
  },
  logger: {
    level: envs['OTEL_LOG_LEVEL'],
    format: envs['OTEL_LOG_FORMAT'],
  },
});

if (validated.success !== true) {
  const errors = validated.error.issues.map(function (err) {
    return `Invalid config value for: ${err.path.join('.')} (${err.message})`;
  });
  throw new Error(errors.join('\n'));
}

// To make sure we deep freeze the config object
export const Config: ReadonlyDeep<Config> = validated.data;
export type Config = z.infer<typeof schema>;
