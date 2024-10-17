import Fastify from 'fastify';

const fastify = Fastify({
	logger: true
});

fastify.get('/', async (req, res) => {
	res.send({ msg: "Hello world!" })
});

export default fastify;
