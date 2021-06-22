module.exports = {
  client: {
    includes: ["./**/*.{tsx,ts}"],
    tagName: "gql",
    service: {
      name: "andend",
      url: "http://localhost:5000/graphql",
    },
  },
};
