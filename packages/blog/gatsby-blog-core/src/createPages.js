const withDefaults = require('./utils/default.options')
const createPostsPage = require('./pages/_posts')
const createPostPage = require('./pages/_post')
const createPostGSPage = require('./pages/_postgs')
const createCollectionPage = require('./pages/_collection')
const createCategoryPage = require('./pages/_category')
const createTagPage = require('./pages/_tag')

module.exports = async (helpers, pluginOptions) => {
  pluginOptions = withDefaults(pluginOptions)

  /**
   * Posts (home) page
   */
  await createPostsPage(helpers, pluginOptions, {
    template: require.resolve('./templates/posts')
  })

  /**
   * Single post pages
   */
  await createPostPage(helpers, pluginOptions, {
    template: require.resolve('./templates/post')
  })

  /**
   * Single post GS pages
   */
  await createPostGSPage(helpers, pluginOptions, {
    template: require.resolve('./templates/postgs')
  })

  /**
   * Category posts pages
   */
  await createCollectionPage(helpers, pluginOptions, {
    template: require.resolve('./templates/collection.category'),
    slugField: 'category___slug'
  })

  /**
   * Category posts pages
   */
  await createCategoryPage(helpers, pluginOptions, {
    template: require.resolve('./templates/categories')
  })

  /**
   * Tag posts pages
   */
  await createTagPage(helpers, pluginOptions, {
    template: require.resolve('./templates/tags'),
  })

  /**
   * Tag posts pages
   */
  await createCollectionPage(helpers, pluginOptions, {
    template: require.resolve('./templates/collection.tag'),
    slugField: 'tags___slug'
  })

  /**
   * Author posts pages
   */
  await createCollectionPage(helpers, pluginOptions, {
    template: require.resolve('./templates/collection.author'),
    slugField: 'author___slug'
  })
}
