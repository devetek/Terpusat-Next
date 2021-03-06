import { GraphQLClient } from 'graphql-request';

const GQL_INSTANCE = new GraphQLClient(process.env.ENDPOINT);

const graphqlClient = async (queries: any, variables: any = null) => {
    try {
        const data = await GQL_INSTANCE.request(queries, variables);

        return data;
    } catch (e) {
        console.error(e);

        return null;
    }
}

export default graphqlClient;