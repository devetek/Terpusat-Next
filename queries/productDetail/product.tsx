import { gql } from 'graphql-request';

const queries = gql`
query ProductQuery($slug: String!) {
    product(where: {slug: $slug}) {
        id
        name
        price
        slug
        images {
            id
            url
            width
            height
        }
        description {
            html
        }
    }
}
`

export default queries;