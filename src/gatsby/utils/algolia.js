const postQuery = `{
    allContentfulPost {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
          heroImage {
            title
            fluid(maxWidth: 1800) {
              src
            }
            ogimg: resize(width: 1800) {
              src
            }
          }
          body {
            childMarkdownRemark {
              timeToRead
              html
              excerpt(pruneLength: 80)
            }
          }
        }
      }
    }
}`;



const flatten = (arr) =>
  arr.map(({ node: { body, ...rest } }) => ({
    ...body,
    ...rest
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.allContentfulPost.edges),
    indexName: `Posts`,
    settings
  }
];

module.exports = queries;
