import fastify from '../app';
import fastifyPostgres from '@fastify/postgres';

fastify.register(fastifyPostgres, {
	connectionString: 'postgres://postgres@localhost/postgres'
});
