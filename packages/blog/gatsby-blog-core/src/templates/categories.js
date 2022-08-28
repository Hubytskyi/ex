import { graphql } from 'gatsby'
import Category from '../containers/Category'

export default Category

export const pageQuery = graphql`
    query allPostsByCategoryQuery(
        $slug: String!
    ) {
        posts: allGooglePostsSheet(
            filter: {
                category: { eq: $slug }
            }
        ) {
            nodes {
                title
                slug
                icon
                filters
                cities
            }
            pageInfo {
                pageCount
                hasPreviousPage
                hasNextPage
                currentPage
            }
            totalCount
        }
    }
`
