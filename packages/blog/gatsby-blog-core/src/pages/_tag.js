const queryMobileMenu = require('../utils/queryMobileMenu')
const tags = require('../data/tags')

module.exports = async (
    {graphql, actions, reporter},
    pluginOptions,
    {template}
) => {
  const {createPage} = actions
  const {
    pageContextOptions
  } = pluginOptions

  pageContextOptions.mobileMenu = await queryMobileMenu({graphql})

  tags.forEach((tag) => {
    createPage({
      path: tag,
      component: template,
      context: {
        slug: tag,
      }
    })
  })
}
