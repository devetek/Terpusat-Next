import { gql } from 'graphql-request';

const queries = gql`
  query ProductsPageQuery {
    products(first: 10, orderBy: id_ASC) {
      slug
    }
  }
`

export default queries;