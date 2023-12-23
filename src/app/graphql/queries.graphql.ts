import {gql} from "@apollo/client";

const GET_TRANSACTIONS = gql`
  {
    getAllTransactions {
      id
      amount
      currencyFrom
      currencyTo
      status
    }
  }
`;

const GET_CUSTOMERS = gql`
  {
    findAllCustomers {
      id
      name
      lastName
      documentNumber
      email
      dateOfBirth
      createdDate
      lastModifiedDate
      transactions {
        id
        amount
        status
        currencyFrom
        currencyTo
      }
      address {
        id
        street
        city
        country
        postalCode
      }
    }
  }
`;

export {GET_TRANSACTIONS, GET_CUSTOMERS}
