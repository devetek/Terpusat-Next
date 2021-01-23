import { GraphQLClient } from 'graphql-request';

const ENDPOINT = 'https://api-ap-northeast-1.graphcms.com/v2/ckk8wdyz26qm301xi40i59daq/master';
const GQL_INSTANCE = new GraphQLClient(ENDPOINT);

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