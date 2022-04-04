// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactions: [Reaction]
  }
  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

    type Query {
      thoughts:[Thought]
    }

    type Query {
      thoughts(username: String): [Thought]
    }

    type Query {
      users: [User]
      user(username: String!): User
      thoughts(username: String): [Thought]
      thought(_id: ID!): Thought
    }

    query {
      thoughts {
        _id
        username
        thoughtText
        createdAt
      }
    }

    query {
      thoughts {
        _id
        username
        thoughtText
        reactions {
          _id
          createdAt
          username
          reactionBody
        }
      }
    }

`;
// export the typeDefs
module.exports = typeDefs;