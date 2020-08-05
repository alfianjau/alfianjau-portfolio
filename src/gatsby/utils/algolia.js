const postQuery = `{
    posts: allContentfulPost {
    edges {
      node {
        id
        slug
        title
        createdAt(formatString: "MMM D, YYYY")
        childContentfulPostBodyTextNode {
          childMarkdownRemark {
            excerpt(pruneLength: 300)
          }
        }
      }
    }
  }
}`;



const flatten = (arr) =>
  arr.map(({ node: { excerpt, ...rest } }) => ({
    ...excerpt,
    ...rest
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings
  }
];

module.exports = queries;
