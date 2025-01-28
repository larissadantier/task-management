import fastify from 'fastify';
import fastifyPostgres from '@fastify/postgres';

import 'dotenv/config';
import { env } from 'env';

export const app = fastify();


app.register(fastifyPostgres, {
  connectionString: `postgres://${env.POSTGRES_USER}:${env.POSTGRES_PASSWORD}@db:${env.POSTGRES_PORT}/${env.POSTGRES_DB}`,
})