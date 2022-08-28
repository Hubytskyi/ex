import { graphql } from 'gatsby';
import Tag from '../containers/Tag';

export default Tag;

export const pageQuery = graphql`
    query allPostsByTagQuery(
        $slug: String
    ) {
        posts: allGooglePostsSheet(
            filter: {tags: {in: [$slug]}}
        ) {
            nodes {
                title
                slug
                icon
                filters
                cities
                states
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
`;
