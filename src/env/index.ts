import { config } from 'dotenv';
import { z } from 'zod';

config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('production'),
  PORT: z.coerce.number().default(3333),
  POSTGRES_SERVER: z.string(),
  POSTGRES_USER: z.string(),
  POSTGRES_HOST: z.string(),
  POSTGRES_PORT: z.string(),
  POSTGRES_PASSWORD: z.string(),
  POSTGRES_DB: z.string()
});


const _env = envSchema.safeParse(envSchema);

if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data;