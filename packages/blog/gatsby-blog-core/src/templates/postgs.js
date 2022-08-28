import { graphql } from 'gatsby'
import PostGSPage from '../containers/PostGS'

export default PostGSPage

export const pageQuery = graphql`
  query PostGSPageQuery(
    $id: String! 
    $category: String!
  ) {
    postGS: googlePostsSheet(id: { eq: $id }) {
      title
      category
      slug
      tags
      description
      state
      city
      federal
      filters
    }
    categoryGS: googleCategoriesSheet(slug: {eq: $category}) {
      name
    }
  }
`
