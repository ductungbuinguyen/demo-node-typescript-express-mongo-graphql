require('dotenv').config();
import "reflect-metadata";
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import { buildSchema } from 'type-graphql';
import PropertyResolver from './resolvers/property.resolver';

const main = async () => {
	const app = express();

	const mongoUri = `mongodb+srv://${process.env.DB_USERNAME_DEV}:${process.env.DB_PASSWORD_DEV}@tung-demo.m3ter.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
	await mongoose
		.connect(mongoUri, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		} as ConnectOptions)
		.then(() => console.log('mongodb connected'))
		.catch((error) => console.log(error));

	const apolloServer = new ApolloServer({
		schema: await buildSchema({
			resolvers: [PropertyResolver],
			validate: false,
		}),
		plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
	});
	await apolloServer.start();
	apolloServer.applyMiddleware({ app, cors: false });

	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () =>
		console.log(
			`sever start on port ${PORT}. GraphQL server started on localhost:${PORT}${apolloServer.graphqlPath}`
		)
	);
};

main().catch((error) => console.log(error));
