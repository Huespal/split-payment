import { gql } from '@apollo/client';

export const CREATE_EVENT = gql`
  mutation CreateEvent(
    $context: String!
    $type: String!
    $isInfoModalOpen: Boolean
    $selectedInstalment: Int
  ) {
    createEvent(
      context: $context
      type: $type
      isInfoModalOpen: $isInfoModalOpen
      selectedInstalment: $selectedInstalment
    )
  }
`;
