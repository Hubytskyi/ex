const queryMobileMenu = require('../utils/queryMobileMenu')
const categories = require('../data/categories')

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

    categories.forEach((category) => {
        createPage({
            path: category.slug,
            component: template,
            context: category
        })
    })
}
