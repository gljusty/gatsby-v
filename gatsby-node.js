/* exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/resume",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}  not needed for now -- keeping for future reference */

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /leader-line-new/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
