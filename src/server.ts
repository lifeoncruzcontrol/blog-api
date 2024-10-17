import Fastify from 'fastify';
import fastifyPostgres from '@fastify/postgres';

const fastify = Fastify({
	logger: true
});

fastify.register(fastifyPostgres, {
	connectionString: 'postgres://postgres@localhost/postgres'
});

fastify.get('/', async (req, res) => {
	res.send({ msg: "Hello world!" })
});

const start = async () => {
	try {
		await fastify.listen({ port: 3000, host: "0.0.0.0" });
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();
