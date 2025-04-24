import { gql } from '@apollo/client';

export const GET_CREDIT_AGREEMENTS = gql`
  query GetCreditAgreements($totalWithTax: Int!) {
    getCreditAgreements(totalWithTax: $totalWithTax) {
      instalmentTotal {
        string
        value
      }
      instalmentCount
      instalmentFee {
        string
        value
      }
    }
  }
`;
