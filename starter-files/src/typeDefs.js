import { gql } from 'apollo-server';

const typeDefs = gql`
	type Human {
		id: ID!
		name: String!
	}

	type Dog {
		id: ID!
		name: String!
		breed: String!
		human: Human
		image: String!
	}

	type Query {
		allDogs: [Dog]!
		dogById(id: ID!): Dog
	}
	
	input HumanInput {
		name: String!
	}

	type Mutation {
		createDog(name: String!, breed: String!, human: HumanInput): Dog!
		deleteDog(id: ID!): Dog
	}
`;

export default typeDefs;
