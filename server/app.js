import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { calculate } from './credit_agreement_calculator.js';

const port = process.env.PORT || 8080;

const typeDefs = `
  type Query {
    getCreditAgreements(totalWithTax: Int!): [CreditAgreement]
  }
  
  type Mutation {
    createEvent(
      context: String!
      type: String!
      isInfoModalOpen: Boolean
      selectedInstalment: Int
    ): String
  }
  
  type Amount {
    value: Int
    string: String
  }

  type CreditAgreement {
    id: ID
    apr: Amount
    totalWithTax: Amount
    costOfCredit: Amount
    costOfCreditPct: Amount
    grandTotal: Amount
    maxFinancedAmount: Amount
    instalmentAmount: Amount
    instalmentFee: Amount
    instalmentTotal: Amount
    instalmentCount: Int
  }

  type Event {
    context: String
    type: String
    isInfoModalOpen: Boolean
    selectedInstalment: Int
  }
`;

const resolvers = {
  Query: {
    getCreditAgreements: (_parent, { totalWithTax }) => {
      if (isNaN(totalWithTax)) {
        return '\'totalWithTax\' is not numeric';
      } else {
        return calculate(totalWithTax);
      }
    }
  },
  Mutation: {
    createEvent: (_parent, body) => {
      if (Math.random() >= 0.1) {
        console.log(`\n✨ \x1b[32mEvent received\x1b[0m!\n`, body);
        return '';
      } else {
        return 'Internal server error';
      }
    }
  }
};

const server = new ApolloServer({
  typeDefs, resolvers
});

const { url } = await startStandaloneServer(server, {
  listen: { port }
});

console.log(`🚀 \x1b[32mReady\x1b[0m - Server started at http://localhost:${port}`)
