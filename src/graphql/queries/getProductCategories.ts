import { gql } from "@apollo/client";

export const GET_PRODUCT_CATEGORIES = gql`
  query productCategories(
    $status: String
    $parentId: String
  ) {
    productCategories(
      status: $status
      parentId: $parentId
    ) {
      _id
      name
      parentId
      description
      status
      productCount
      __typename
    }
  }
`;
