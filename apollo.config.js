module.exports = {
  client: {
    includes: ["./**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "instagram",
      url: "http://localhost:5000/graphql",
    },
  },
};
