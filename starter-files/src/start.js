import { ApolloServer } from 'apollo-server';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import typeDefs from './typeDefs';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Dog from './resolvers/Dog';

// import environmental variables from our variables.env file
dotenv.config();

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.MONGODB_URI, {
	useCreateIndex: true,
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

mongoose.connection.on('error', (err) => {
	console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});


const server = new ApolloServer({
	typeDefs,
	resolvers: {
		Query,
		Mutation,
		Dog,
	},
});

server.listen(7788).then(() => {
	console.log('✨🐶✨Doggie API running → PORT 7788 ✨🐶✨');
});
